import { motion } from "motion/react"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

interface InvitationUIProps {
  onConfirm: () => void;
}

export default function InvitationUI({ onConfirm }: InvitationUIProps) {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between p-6 sm:p-12 text-white overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-white/10 z-0"></div>
      <div className="fixed top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white/10 z-0"></div>

      {/* Top Header */}
      <div className="flex justify-between items-start z-10">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-1"
        >
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase opacity-80">Celebration / Brenda</p>
          <p className="text-3xl sm:text-5xl font-black italic tracking-tighter">2026</p>
        </motion.div>
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-right"
        >
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase opacity-80">Save the Date</p>
          <p className="text-lg sm:text-2xl font-bold font-heading">ABRIL 21</p>
        </motion.div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center z-10 py-12">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-huge text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center leading-none"
        >
          BRENDA
        </motion.h1>
        <motion.div 
          initial={{ y: 20, opacity: 0, rotate: 0 }}
          animate={{ y: 0, opacity: 1, rotate: -2 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-2 sm:-bottom-4 z-20 flex gap-4 uppercase font-black text-[10px] sm:text-sm tracking-widest italic bg-white text-red-700 px-4 sm:px-8 py-2 sm:py-3 shadow-xl whitespace-nowrap"
        >
          <span>Birthday</span>
          <span>•</span>
          <span>Special</span>
          <span>•</span>
          <span>Night</span>
        </motion.div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-10 mt-auto">
        {/* Left Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="md:col-span-4 space-y-6"
        >
          <p className="text-sm sm:text-base leading-relaxed opacity-90 border-l-2 border-white pl-4 font-sans font-medium">
            Você está cordialmente convidado para celebrar mais um ano de vida, risadas e boas vibrações. 
            Junte-se a nós para uma noite inesquecível dedicada à única e especial Brenda.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-4 text-xs font-bold tracking-widest uppercase opacity-70">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 21 ABRIL</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> O DIA TODO</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> CELEBRATE</div>
          </div>
        </motion.div>

        <div className="hidden md:block md:col-span-3"></div>

        {/* Right Glass Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: 1 }}
          transition={{ delay: 0.8 }}
          className="md:col-span-5 glass-card p-8 rounded-3xl text-red-800 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <h3 className="text-[10px] font-black tracking-widest uppercase mb-4 opacity-70">Mensagem Especial</h3>
          <p className="text-xl sm:text-2xl font-black leading-tight mb-8 font-heading italic">
            "Que seu dia seja tão radiante e forte quanto esse vermelho. Feliz aniversário, Brenda!"
          </p>
          
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onConfirm();
            }}
            className="group w-full flex justify-between items-center pt-6 border-t border-red-100 hover:text-red-600 transition-colors cursor-pointer"
          >
            <span className="text-[11px] uppercase font-black tracking-widest pointer-events-none">Confirmar Presença</span>
            <div className="w-10 h-10 bg-red-700 group-hover:bg-red-800 rounded-full flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-lg shadow-red-900/20 pointer-events-none">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Messages Feed (Optional Mini Section) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.5em] opacity-40 font-black"
      >
        Brenda B-Day • 2024 • Dress Code: Casual Chique
      </motion.div>
    </div>
  )
}
