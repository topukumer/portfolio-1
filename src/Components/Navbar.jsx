import React, { useState } from "react";
import logo_img from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#232323] text-white fixed top-0 left-0 z-50 shadow-md" id="navbar">

      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-5">

        <a href="#hero" className="inline-block">
          <img src={logo_img} alt="Logo" className="w-50 h-20 object-contain" />
        </a>


        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li><a href="#hero" className="cursor-pointer hover:text-gray-300 transition">Home</a></li>
          <li><a href="#about" className="cursor-pointer hover:text-gray-300 transition">About</a></li>
          <li><a href="#skills" className="cursor-pointer hover:text-gray-300 transition">Skills</a></li>
          <li><a href="#projects" className="cursor-pointer hover:text-gray-300 transition">Projects</a></li>
          <li><a href="#experience" className="cursor-pointer hover:text-gray-300 transition">Experience</a></li>
          <li><a href="#contact" className="cursor-pointer hover:text-gray-300 transition">Contact</a></li>
        </ul>

        <div className="hidden md:flex flex-col text-sm text-gray-300 leading-tight">
          <p className="flex items-center gap-2">
            <span className="text-cyan-400">✉</span> topukumer092@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <span className="text-green-400">📞</span> 01790855085
          </p>
        </div>

        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-[#1c1c1c] py-6 px-5 transition-all duration-300 shadow-lg ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium">
          <li><a href="#hero" className="cursor-pointer hover:text-gray-300 transition">Home</a></li>
          <li><a href="#about" className="cursor-pointer hover:text-gray-300 transition">About</a></li>
          <li><a href="#skills" className="cursor-pointer hover:text-gray-300 transition">Skills</a></li>
          <li><a href="#projects" className="cursor-pointer hover:text-gray-300 transition">Projects</a></li>
          <li><a href="#experience" className="cursor-pointer hover:text-gray-300 transition">Experience</a></li>
          <li><a href="#contact" className="cursor-pointer hover:text-gray-300 transition">Contact</a></li>
        </ul>

        <div className="mt-5 text-gray-300 text-sm">
          <p className="flex items-center gap-2">
            <span className="text-cyan-400">✉</span> topukumer092@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-1">
            <span className="text-green-400">📞</span> 01790855085
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
