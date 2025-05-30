"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { useRef } from "react";

const MotionImage = motion(Image);

export const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // useMotionValueEvent(translateY, "change", (latestVal) =>
  //   console.log(latestVal)
  // );

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          {/* left text side */}
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <MotionImage
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:-left-0 -translate-y-[30px]"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            />

            <MotionImage
              src={cylinderImage}
              alt="Cylinder image"
              width={220}
              height={220}
              className="hidden md:block md:absolute -top-8 -left-32"
              style={{
                translateY: translateY,
              }}
            />

            <MotionImage
              src={noodleImage}
              alt="Noodle image"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                translateY: translateY,
                rotate: "30deg",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
