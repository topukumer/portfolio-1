import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React JS", icon: FaReact, color: "text-cyan-500" },
  { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express JS", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
];

const Skills = () => {
  return (
    <section className="bg-[#0f0f0f] py-20" id="skills">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Tools and technologies I use to build modern, responsive web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="
                  bg-[#121212]
                  border border-white/10
                  rounded-xl
                  p-6
                  flex flex-col items-center justify-center gap-3
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                  transition duration-300
                "
              >
                <Icon className={`text-4xl ${skill.color}`} />
                <p className="text-sm font-medium text-gray-300">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
