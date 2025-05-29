/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

const videoAssets = {
  passenger: {
    body: {
      mp4: "/assets/videos/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
      webm: "/assets/videos/Passenger Alpha.bc06b347f5b526ad9a60.webm",
      icon: "/assets/icons/download.png",
      label: "Complete body",
    },
    engine: {
      mp4: "/assets/videos/Front.8f5fda304d3095ab6b02.mp4",
      webm: "/assets/videos/Front.8f5fda304d3095ab6b02.webm",
      icon: "/assets/icons/front.png",
      label: "Front",
    },
    cabin: {
      mp4: "/assets/videos/Cabin.3260d3e4f52b3804dae5.mp4",
      webm: "/assets/videos/Cabin.3260d3e4f52b3804dae5.webm",
      icon: "/assets/icons/Cabin.png",
      label: "Cabin",
    },
    trunk: {
      mp4: "/assets/videos/Trunk.54bfaa734c0395172c08.mp4",
      webm: "/assets/videos/Trunk.54bfaa734c0395172c08.webm",
      icon: "/assets/icons/trunk.png",
      label: "Trunk",
    },
    exterior: {
      mp4: "/assets/videos/Exterior.a127ebb308e655c7e32c.mp4",
      webm: "/assets/videos/Exterior.a127ebb308e655c7e32c.webm",
      icon: "/assets/icons/exterior.png",
      label: "Exterior",
    },
  },
  commercial: {
    body: {
      mp4: "/assets/videos/Commercial Alpha.92c92d40f9116c837d1d.mp4",
      webm: "/assets/videos/Commercial Alpha.92c92d40f9116c837d1d.webm",
      icon: "/assets/icons/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg",
      label: "Complete body",
    },
    engine: {
      mp4: "/assets/videos/Commercial-Engine.d8957f7c027ca396858e.mp4",
      webm: "/assets/videos/Commercial-Engine.d8957f7c027ca396858e.webm",
      icon: "/assets/icons/commercial-engine.474985507c936157fc7a6daa457d4f04.svg",
      label: "Engine",
    },
    cabin: {
      mp4: "/assets/videos/Commercial-Cabin.69adf15a8021267cbe8c.mp4",
      webm: "/assets/videos/Commercial-Cabin.69adf15a8021267cbe8c.webm",
      icon: "/assets/icons/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg",
      label: "Cabin",
    },
  },
};

export default function Section1() {
  const [currentSection, setCurrentSection] = useState<
    "passenger" | "commercial"
  >("passenger");
  const [currentPassengerKey, setPassengerKey] = useState("body");
  const [currentCommercialKey, setCommercialKey] = useState("body");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPassengerVisible, setPassengerVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleManualSwitch = (section: "passenger" | "commercial") => {
    if (currentSection !== section) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSection(section);
        setIsTransitioning(false);
      }, 200);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const container = containerRef.current;
      if (!header || !container) return;

      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 2;

      const rect = container.getBoundingClientRect();
      const containerMiddle = rect.top + rect.height / 2;

      const threshold = 50; // pixels of tolerance

      // Update passenger visibility based on header top
      setPassengerVisible(header.getBoundingClientRect().top <= 100);

      if (
        containerMiddle < viewportMiddle - threshold &&
        currentSection !== "commercial"
      ) {
        handleManualSwitch("commercial");
      } else if (
        containerMiddle > viewportMiddle + threshold &&
        currentSection !== "passenger"
      ) {
        handleManualSwitch("passenger");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, currentSection, currentPassengerKey, currentCommercialKey]);

  const getVideoSource = () => {
    return currentSection === "passenger"
      ? videoAssets.passenger[currentPassengerKey]
      : videoAssets.commercial[currentCommercialKey];
  };

  return (
    <section
      ref={containerRef}
      className="relative mt-60 w-full min-h-[40vh] font-sans bg-black text-white px-4 md:px-16 py-32"
    >
      {/* Sticky Header */}
      <div
        ref={headerRef}
        className="sticky top-14 z-10 mb-100 flex justify-center items-center h-[20vh] md:h-[20vh] bg-black text-center"
      >
        <h1 className="text-2xl font-light md:text-4xl leading-tight">
          Evolving the drive with <span className="font-bold">360-degree</span>{" "}
          <br /> comprehensive solutions
        </h1>
      </div>

      <div className="flex flex-row h-[40vh] items-start m-20 gap-6">
        {/* Left Panel */}
        <div className="flex flex-col items-start space-y-4 sticky top-[40vh] md:top-[20vh] self-start">
          <div
            className={clsx(
              "absolute left-0 top-0 bottom-0 w-1 bg-gray-600 rounded-full transition-all duration-1000 ease-in-out",
              currentSection === "passenger"
                ? isPassengerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
                : "opacity-100 translate-y-0"
            )}
          >
            <div
              className={clsx(
                "absolute left-0 rounded-full transition-all duration-500",
                currentSection === "passenger"
                  ? "top-0 h-1/2 w-2 bg-white"
                  : "top-1/2 h-1/2 w-1 bg-white"
              )}
            />
          </div>

          <div
            className={clsx(
              "pl-4 flex w-[30vw] h-[30vh] flex-col gap-4 font-sans transition-all duration-1000 ease-in-out",
              currentSection === "passenger"
                ? isPassengerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
                : "opacity-100 translate-y-0",
                
            )}
          >
            <button
              onClick={() => handleManualSwitch("passenger")}
              className="text-left"
            >
              <h2
                className={clsx(
                  "text-4xl pb-4",
                  currentSection === "passenger"
                    ? "text-white"
                    : "text-gray-500"
                )}
              >
                Passenger Vehicles
              </h2>
              <p className="text-md text-gray-400">
                Revving up innovation from <br />
                interior to exterior.
              </p>
            </button>
            <button
              onClick={() => handleManualSwitch("commercial")}
              className="text-left font-sans"
            >
              <h2
                className={clsx(
                  "text-4xl pb-4",
                  currentSection === "commercial"
                    ? "text-white"
                    : "text-gray-500"
                )}
              >
                Commercial Vehicles
              </h2>
              <p className="text-md text-gray-400">
                Advancing engineering <br />
                for heavy-duty vehicles.
              </p>
            </button>
          </div>
        </div>

        {/* Right Panel: Video + Icons */}
        <div
          className={clsx(
            "flex flex-col items-center w-full transition-all duration-700 ease-in-out transform",
            currentSection === "passenger"
              ? isPassengerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
              : "opacity-100 translate-y-0"
          )}
        >
          {/* Video */}
          <div
            className={clsx(
              "relative overflow-hidden rounded-xl w-full h-[25vh] md:max-w-[500px] aspect-video transition-all duration-700 ease-in-out",
              isTransitioning && "scale-60 opacity-50"
            )}
          >
            <video
              ref={videoRef}
              key={getVideoSource().mp4}
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-in-out"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={getVideoSource().mp4} type="video/mp4" />
              <source src={getVideoSource().webm} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Icons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {(currentSection === "passenger"
              ? Object.entries(videoAssets.passenger)
              : Object.entries(videoAssets.commercial)
            ).map(([key, val]) => (
              <button
                key={key}
                onClick={() =>
                  currentSection === "passenger"
                    ? setPassengerKey(key)
                    : setCommercialKey(key)
                }
                className={clsx(
                  "flex items-center gap-2 transition-colors duration-300",
                  (currentSection === "passenger" &&
                    currentPassengerKey === key) ||
                    (currentSection === "commercial" &&
                      currentCommercialKey === key)
                    ? "text-white"
                    : "text-gray-500"
                )}
              >
                <img src={val.icon} alt={val.label} className="w-12 h-15" />
                <span>{val.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={clsx(
          "relative bottom-32 left-300 border border-white bg-opacity-20 backdrop-blur-md rounded-full p-3 hover:bg-opacity-40 transition cursor-pointer duration-700 ease-in-out",
          currentSection === "passenger"
            ? isPassengerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
            : "opacity-100 translate-y-0"
        )}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg
            width="24"
            height="24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="8,5 19,12 8,19" />
          </svg>
        )}
      </button>
    </section>
  );
}
