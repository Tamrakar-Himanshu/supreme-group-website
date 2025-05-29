"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
      } else {
        // Scrolling down
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Header */}
        <header
          className={`bg-white py-4 px-6 fixed top-0 left-0 right-0 transition-transform duration-300 z-50 ${
            showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-16 flex justify-between items-center">
            <Image
              src="/assets/images/logo.svg"
              alt="Logo"
              width={150}
              height={100}
            />
          </div>
        </header>

        {/* Add padding top to avoid content hidden under fixed header */}
        <div className="pt-[72px] flex-grow relative overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/assets/videos/automotive.224e7418884105595114.mp4"
              type="video/mp4"
            />
            <source
              src="/assets/videos/automotive.224e7418884105595114.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>

          {/* Video overlay content */}
          <div className="absolute inset-0 font-sans bg-black/60 flex items-center justify-center">
            <div className="text-center text-white mb-4 px-2 ">
              <h2 className="font-light text-[20px] mb-7">
                Driven by performance
              </h2>
              <h1 className="text-[30px] md:text-4xl font-semibold mb-2">
                Soft trims and{" "}
                <span className="text-[#00BFFF]">NVH solutions</span>
              </h1>
              <p className="text-4xl md:text-4xl font-extralight">
                for seamless rides
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
