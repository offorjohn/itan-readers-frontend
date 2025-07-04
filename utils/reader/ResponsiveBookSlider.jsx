"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const books = [
  ["ancestral-code", "ancestral code"],
  ["Lazarus", "Lazarus Convergence"],
  ["titan-race", "Titan race"],
  ["in-bed-with-her-guy", "in bed with her guy"],
  ["sons-of-the-7th-dawn", "sons of the 7th dawn"],
];

export default function ResponsiveBookSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <Swiper spaceBetween={16} slidesPerView={2.5}>
        {books.map(([filename, alt]) => (
          <SwiperSlide key={filename}>
            <Image
              src={`/images/readers/onboarding/${filename}.png`}
              alt={alt}
              width={120}
              height={300}
              className="w-24 sm:w-28 h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {books.map(([filename, alt]) => (
        <Image
          key={filename}
          src={`/images/readers/onboarding/${filename}.png`}
          alt={alt}
          width={120}
          height={300}
          className="w-24 sm:w-28 md:w-[150px] h-auto"
        />
      ))}
    </div>
  );
}
