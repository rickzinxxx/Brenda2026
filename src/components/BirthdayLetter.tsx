import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Heart, ArrowLeft, Volume2, VolumeX } from "lucide-react"
import { CosmicParallaxBg } from "./ui/parallax-cosmic-background"

interface BirthdayLetterProps {
  onBack: () => void;
  isPlaying: boolean;
  onToggleMusic: () => void;
  onComplete: () => void;
}

const letterSegments = [
  {
    head: "BRENDA, MEU AMOR",
    text: "AMANHÃ, VOCÊ COMPLETA, 18 ANOS",
    body: "Enquanto o mundo vê essa data como o início da fase adulta, eu olho para você e vejo a jornada incrível que construímos até aqui.",
    delay: 22000
  },
  {
    head: "DESDE O INÍCIO",
    text: "CONHECI VOCÊ, COM APENAS, 16 ANOS",
    body: "E desde aquele momento, meu mundo mudou de cor. Literamente. Cada dia ao seu lado tem sido uma descoberta maravilhosa.",
    delay: 22000
  },
  {
    head: "POR MEUS OLHOS",
    text: "VOCÊ EMANA, LUZ, ÚNICA",
    body: "Inseguranças podem surgir, mas saiba que nenhuma outra mulher chega perto da luz que você emana. Para mim, a perfeição está em cada detalhe seu.",
    delay: 22000
  },
  {
    head: "CADA DETALHE",
    text: "SEU CABELO, SUAS SARDAS, SEU SORRISO",
    body: "O tom vibrante do seu ruivo, cada sardinha no seu rosto que eu amo contar... e esse seu sorriso que ilumina meus dias mais escuros.",
    delay: 22000
  },
  {
    head: "NOSSO LAR",
    text: "VENDO VOCÊ, MULHER, E MÃE",
    body: "Moramos juntos há pouco mais de um ano, e ver você se tornar a mulher e mãe que é tem sido o maior privilégio da minha vida.",
    delay: 22000
  },
  {
    head: "NOSSO DYLAN",
    text: "O REFLEXO, DO NOSSO, AMOR",
    body: "Com apenas 10 meses, ele é a prova viva de tudo que sentimos. Quando olho para vocês dois, sinto que tenho tudo o que sempre precisei.",
    delay: 22000
  },
  {
    head: "VOCÊ É TUDO",
    text: "NINGUÉM NUNCA, OCUPARÁ, SEU LUGAR",
    body: "Você não é apenas 'suficiente', você é tudo. É a mulher que me ajuda a viver, que me dá forças e torna a nossa casa um lar.",
    delay: 22000
  },
  {
    head: "FELIZ 18 ANOS",
    text: "PARA SEMPRE, SEGURANDO, SUA MÃO",
    body: "Que esse novo ciclo te mostre o quão maravilhosa e única você é. Eu te amo, hoje e sempre. Com carinho, Henrique.",
    delay: 26000
  }
];

export default function BirthdayLetter({ onBack, isPlaying, onToggleMusic, onComplete }: BirthdayLetterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const duration = letterSegments[currentIndex].delay;

    const timer = setTimeout(() => {
      if (currentIndex < letterSegments.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-black overflow-hidden"
    >
      <CosmicParallaxBg 
        key={currentIndex}
        head={letterSegments[currentIndex].head}
        text={letterSegments[currentIndex].text}
        body={letterSegments[currentIndex].body}
        loop={false}
        restartKey={currentIndex}
      />

      {/* Floating Music Control */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        whileHover={{ opacity: 1 }}
        onClick={onToggleMusic}
        className="fixed top-6 right-6 z-[130] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white transition-all shadow-xl"
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-red-400" />}
      </motion.button>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 0.5, x: 0 }}
        whileHover={{ opacity: 1 }}
        onClick={onBack}
        className="fixed top-6 left-6 z-[130] flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] font-bold"
      >
        <ArrowLeft className="w-4 h-4" /> Voltar
      </motion.button>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[140] flex items-center gap-6">
        <button 
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(prev => prev - 1)}
          className="text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 transition-all disabled:hidden text-white"
        >
          Anterior
        </button>
        <div className="text-[10px] font-black tracking-widest text-white/20">
          {currentIndex + 1} / {letterSegments.length}
        </div>
        <button 
          disabled={currentIndex === letterSegments.length - 1}
          onClick={() => setCurrentIndex(prev => prev + 1)}
          className="text-[10px] font-black tracking-widest uppercase opacity-40 hover:opacity-100 transition-all disabled:hidden text-white"
        >
          Próximo
        </button>
      </div>

      {/* Film Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[120] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')]"></div>
    </motion.div>
  )
}
