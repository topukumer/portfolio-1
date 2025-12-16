import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#0f0f0f] py-20 w-full" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Feel free to reach out via phone, email, or visit my location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          
          <div className="bg-[#121212] border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition">
            <span className="text-cyan-400">
              <Phone size={24} />
            </span>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="font-medium">01790855085</p>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition">
            <span className="text-cyan-400">
              <Mail size={24} />
            </span>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-medium">topukumer092@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition">
            <span className="text-cyan-400">
              <MapPin size={24} />
            </span>
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="font-medium">Badda, Dhaka</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


export default Contact