import Image from "next/image";

import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <div className="flex mt-10 justify-center gap-2">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn More</span>
              <ArrowRight className="size-5" />
            </button>
          </div>

          {/* Images */}
          <Image
            src={springImage}
            alt="Spring image"
            width={360}
            className="hidden md:block absolute -right-[331px] -top-[19px]"
          />

          <Image
            src={starImage}
            alt="Star image"
            width={360}
            className="hidden md:block absolute -left-[350px] -top-[137px]"
          />
        </div>
      </div>
    </section>
  );
};
