import React from 'react';
import { motion } from 'motion/react';
import { GLSLHills } from './ui/glsl-hills';
import { Heart } from 'lucide-react';

export default function FinalStage() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      <GLSLHills />
      
      <div className="relative z-10 text-center space-y-8 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <Heart className="w-16 h-16 text-red-600 fill-red-600/20" />
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full bg-red-600/30 blur-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="font-heading text-4xl sm:text-7xl italic tracking-tighter leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Obrigado amor
          </h1>
          <p className="font-sans text-sm sm:text-base uppercase tracking-[0.5em] text-red-500 font-black opacity-80">
            Por todos os momentos..
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.3 }}
           transition={{ delay: 4, duration: 2 }}
           className="pt-12 text-[10px] uppercase tracking-widest font-bold"
        >
           O início do nosso "para sempre"
        </motion.div>
      </div>

      {/* Film Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[120] opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')]"></div>
    </div>
  );
}
