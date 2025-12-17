import React from "react";
import profile_img from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="w-full min-h-[100vh] md:min-h-[90dvh] bg-[#010101] text-white flex items-center md:items-center py-12 md:py-0" id="hero">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">

        <div className="flex justify-center pt-4">
          <img
            src={profile_img}
            alt="Profile"
            className="
              w-40
              sm:w-52
              md:w-72
              lg:w-80
              shadow-xl
              border border-gray-700
              rounded-xl
            "
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-cyan-400">Topu Kumer</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl mt-3 text-gray-300">
            A Passionate Web Developer from Bangladesh
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0 text-sm sm:text-base">
            I specialize in building modern, responsive, and user-friendly web
            applications using React, JavaScript, and Tailwind CSS. I focus on
            clean UI/UX, performance optimization, and turning ideas into
            beautiful digital solutions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-semibold transition"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
