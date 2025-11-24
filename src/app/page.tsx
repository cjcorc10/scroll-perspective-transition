'use client';
import Lenis from 'lenis';
import {
  MotionValue,
  useScroll,
  motion,
  useTransform,
} from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="relative h-[200vh] font-custom">
      <Section1 scroll={scrollYProgress} />
      <Section2 scroll={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scroll }: { scroll: MotionValue<number> }) => {
  const rotate = useTransform(scroll, [0, 1], [0, 4]);
  const scale = useTransform(scroll, [0, 1], [1, 0.8]);
  return (
    <motion.div
      style={{ rotate: rotate, scale: scale }}
      className="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-800 font-bold text-white text-4xl gap-4"
    >
      <p>SCROLL DOWN FOR</p>
      <div className="flex items-center gap-4">
        <p>SECTION</p>
        <span className="relative h-[7vw] aspect-2/1 overflow-hidden ">
          <Image
            src="/images/image3.jpg"
            alt="image 1"
            fill
            style={{ objectFit: 'cover' }}
          />
        </span>
        <p>CHANGE</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scroll }: { scroll: MotionValue<number> }) => {
  const rotate = useTransform(scroll, [0, 1], [-4, 0]);
  const scale = useTransform(scroll, [0, 1], [0.8, 1]);
  return (
    <motion.div
      style={{ rotate: rotate, scale: scale }}
      className="relative h-screen flex items-center justify-center"
    >
      <Image
        src="/images/image4.jpg"
        alt="image 2"
        style={{ objectFit: 'cover' }}
        fill
      />
    </motion.div>
  );
};
