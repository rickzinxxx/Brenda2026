import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import BackgroundShaders from "@/components/ui/background-shaders"
import InvitationUI from "@/components/InvitationUI"
import BirthdayLetter from "@/components/BirthdayLetter"
import MusicPlayer from "@/components/MusicPlayer"
import CinematicSlider from "@/components/CinematicSlider"
import FinalStage from "@/components/FinalStage"

type AppStage = 'invitation' | 'cinematic' | 'letter' | 'final';

export default function App() {
  const [stage, setStage] = useState<AppStage>('invitation');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleConfirm = () => {
    setStage('cinematic');
    setIsPlaying(true);
  };

  return (
    <main className="relative overflow-hidden selection:bg-red-500/30">
      <BackgroundShaders />
      
      <MusicPlayer 
        key={isPlaying ? "playing" : "stopped"}
        url="https://youtu.be/tQz93eTCpSA?si=ircIZu537ea1s8eD" 
        playing={isPlaying} 
      />

      <AnimatePresence mode="wait">
        {stage === 'invitation' && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InvitationUI onConfirm={handleConfirm} />
          </motion.div>
        )}

        {stage === 'cinematic' && (
          <motion.div
            key="cinematic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CinematicSlider onComplete={() => setStage('letter')} />
          </motion.div>
        )}

        {stage === 'letter' && (
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BirthdayLetter 
              onBack={() => setStage('invitation')} 
              isPlaying={isPlaying}
              onToggleMusic={() => setIsPlaying(!isPlaying)}
              onComplete={() => setStage('final')}
            />
          </motion.div>
        )}

        {stage === 'final' && (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <FinalStage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
