import { Warp } from "@paper-design/shaders-react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useEffect } from "react"

export default function BackgroundShaders() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const gradient = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(circle at ${Number(x) * 100}% ${Number(y) * 100}%, rgba(251, 113, 133, 0.45) 0%, transparent 45%)`
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      mouseX.set(clientX / window.innerWidth);
      mouseY.set(clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchstart", handleMove);
    window.addEventListener("touchmove", handleMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchstart", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#B91C1C]">
      {/* Decorative Gradients with movement */}
      <motion.div 
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #fb7185 0%, transparent 60%), radial-gradient(circle at 80% 70%, #7f1d1d 0%, transparent 50%), radial-gradient(circle at 50% 50%, #dc2626 0%, transparent 100%)",
            "radial-gradient(circle at 30% 40%, #fb7185 0%, transparent 60%), radial-gradient(circle at 70% 60%, #7f1d1d 0%, transparent 50%), radial-gradient(circle at 60% 40%, #dc2626 0%, transparent 100%)",
            "radial-gradient(circle at 20% 30%, #fb7185 0%, transparent 60%), radial-gradient(circle at 80% 70%, #7f1d1d 0%, transparent 50%), radial-gradient(circle at 50% 50%, #dc2626 0%, transparent 100%)",
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 opacity-40"
      />

      {/* Reactive Interaction Layer */}
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{ background: gradient }}
      />

      <Warp
        style={{ width: "100%", height: "100%", opacity: 0.6 }}
        proportion={0.5}
        softness={0.6}
        distortion={0.6}
        swirl={1.5}
        swirlIterations={15}
        shape="edge"
      />
    </div>
  )
}
