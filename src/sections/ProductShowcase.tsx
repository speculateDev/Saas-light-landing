"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { useRef } from "react";

const MotionImage = motion(Image);

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // [el, viewport]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag text-center">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            Saas website in just minutes with this template
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} alt="product image" className="mt-10" />

          <MotionImage
            src={pyramidImage}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -top-32 -right-36"
            style={{
              translateY: translateY,
            }}
          />

          <MotionImage
            src={tubeImage}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute -left-36 bottom-24"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
