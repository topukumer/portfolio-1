import React from "react";
import about_img from "../assets/about.jpeg";

const About = () => {
  return (
    <section className="bg-[#0f0f0f] py-20 w-full" id="about">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        <div className="flex flex-col md:flex-row items-center gap-16">

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-5">
              Hi, I’m <span className="text-white font-semibold">Topu Kumer</span>,
              a passionate Web Developer from Bangladesh. I build clean,
              responsive, and user-friendly web applications using modern
              technologies.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I’ve worked on dashboards, ERP-style modules, data analysis pages,
              security-based systems, and modern front-end interfaces. I focus on
              performance, simplicity, and solving real problems.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Experience with real-world dashboards & enterprise systems
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Strong focus on clean UI & responsive design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Passionate about scalable & maintainable code
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src={about_img}
                alt="Topu profile"
                className="w-[340px] md:w-[420px] rounded-2xl object-cover border border-white/10"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-400/20"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
