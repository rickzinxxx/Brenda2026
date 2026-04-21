import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ShaderAnimation from './ui/shader-animation';
import { ArrowRight, SkipForward } from 'lucide-react';

interface CinematicSliderProps {
  onComplete: () => void;
}

const messages = [
  {
    title: "O TEMPO É FEITO DE MOMENTOS",
    subtitle: "Alguns brilham mais que os outros.",
    delay: 10000,
  },
  {
    title: "E HOJE, O MUNDO REDUZ O PASSO",
    subtitle: "Para celebrar uma trajetória única.",
    delay: 10000,
  },
  {
    title: "BRENDA",
    subtitle: "A força e a beleza em sua forma mais pura.",
    delay: 12000,
  },
  {
    title: "18 ANOS",
    subtitle: "O início de um capítulo extraordinário.",
    delay: 10000,
  },
  {
    title: "PREPARE O CORAÇÃO",
    subtitle: "Pois esta noite é para você.",
    delay: 8000,
  }
];

export default function CinematicSlider({ onComplete }: CinematicSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentMessage = messages[currentIndex];
    let start = Date.now();
    const duration = currentMessage.delay;

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
        if (currentIndex < messages.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setProgress(0);
        } else {
          onComplete();
        }
      }
    }, 16);

    return () => clearInterval(timer);
  }, [currentIndex, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-hidden">
      <ShaderAnimation>
        <div className="relative w-full h-full flex flex-col items-center justify-center text-white px-6">
          
          {/* Cinematic Letterbox Effects */}
          <div className="absolute top-0 left-0 w-full h-[15vh] bg-black/40 backdrop-blur-sm z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-black/40 backdrop-blur-sm z-20 pointer-events-none"></div>

          {/* Progress Bar (Cinematic Style) */}
          <div className="absolute bottom-[17vh] left-1/2 -translate-x-1/2 w-32 h-[2px] bg-white/20 z-30">
            <motion.div 
              className="h-full bg-white"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Messages */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-2xl"
            >
              <h2 className="text-4xl sm:text-6xl font-black italic tracking-tighter mb-4 font-heading drop-shadow-2xl">
                {messages[currentIndex].title}
              </h2>
              <p className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase opacity-60">
                {messages[currentIndex].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Skip Button */}
          <button 
            onClick={onComplete}
            className="absolute bottom-8 right-8 z-40 group flex items-center gap-2 text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 transition-all"
          >
            Pular Introdução
            <SkipForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10"></div>
        </div>
      </ShaderAnimation>
    </div>
  );
}
