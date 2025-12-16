import React from "react";

const experiences = [
  {
    role: "Junior Web Developer",
    company: "Softvence Agency",
    duration: "March 2025 - November 2025",
  },
  {
    role: "Junior Web Developer",
    company: "EaglesIdea",
    duration: "September 2024 - March 2025",
  },
];

const Experience = () => {
  return (
    <section className="bg-[#0f0f0f] py-20" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Professional roles and experience I have gained in web development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-white/10 rounded-xl p-6 
                         hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] 
                         transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{exp.role}</h3>
              <p className="text-cyan-400 font-medium mb-1">{exp.company}</p>
              <p className="text-gray-400">{exp.duration}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
