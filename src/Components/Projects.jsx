import React from "react";
import { ExternalLink, Github } from "lucide-react";
import femora from "../assets/femora.png";
import food_delivery from "../assets/food-delivery.png";
import men_fasion from "../assets/men-fasion.png";
import plant_shop from "../assets/plant-shop.png";
import cloth_fashion from "../assets/cloth-fashion.png";
import real_state from "../assets/real-state.png";
import eaglesidea from "../assets/eaglesidea.png";
import text_manage from "../assets/text-manage.png";

const projects = [
  {
    img: femora,
    title: "Femora – Women Fashion",
    category: "Fashion / E-commerce",
    preview: "https://femora-women-fashion.vercel.app/",
    github: "https://github.com/topukumer/femora-women-fashion",
  },
  {
    img: food_delivery,
    title: "Food Delivery App",
    category: "Food / Ordering",
    preview: "https://topukumer.github.io/food-app/",
    github: "https://github.com/topukumer/food-app",
  },
  {
    img: men_fasion,
    title: "Men Fashion",
    category: "Fashion Website",
    preview: "https://topukumer.github.io/men-fashion/",
    github: "https://github.com/topukumer/men-fashion",
  },
  {
    img: plant_shop,
    title: "Plant Selling App",
    category: "E-commerce / Plants",
    preview: "https://plant-app-taupe.vercel.app/",
    github: "https://github.com/topukumer/plant-app",
  },
  {
    img: cloth_fashion,
    title: "Cloth Fashion",
    category: "Fashion Landing",
    preview: "https://topukumer.github.io/cloth-fashion/",
    github: "https://github.com/topukumer/cloth-fashion",
  },
  {
    img: real_state,
    title: "Real Estate Website",
    category: "Business / Property",
    preview: "https://real-state-nine-xi.vercel.app/",
    github: "https://github.com/topukumer/real-state",
  },
  {
    img: eaglesidea,
    title: "EaglesIdea Demo",
    category: "Corporate Website",
    preview: "https://eaglesidea0web-d.vercel.app/",
    github: "https://github.com/topukumer/eaglesidea0web-d",
  },
  {
    img: text_manage,
    title: "Text Manage App",
    category: "Utility Application",
    preview: "https://text-mange-app.vercel.app/",
    github: "https://github.com/topukumer/Text-Mange-App",
  },
];

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-[#0f0f0f]" id="projects">

      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Projects
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          A selection of React projects focused on clean UI, responsiveness, and real-world layouts.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 bg-[#121212] overflow-hidden
             hover:border-cyan-400/40
             hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
             transition"
          >

            <div className="h-44 w-full overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-xs uppercase tracking-wide text-cyan-400">
                {project.category}
              </span>

              <h3 className="text-lg font-semibold text-white mt-2 mb-5">
                {project.title}
              </h3>

              <div className="flex gap-3">
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-400 text-black hover:bg-cyan-300 transition"
                >
                  <ExternalLink size={16} /> Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </div>


        ))}
    </div>
    </section >
  );
};

export default Projects;
