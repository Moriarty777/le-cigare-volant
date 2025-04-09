import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Location = () => {
  return (
    <div className="max-w-5xl mx-auto text-center">
      {/* Title */}
      <h2 className="text-[#FFD700] text-3xl font-serif italic mb-2">
        Contact Us
      </h2>
      <p className="text-white text-lg mb-6">Get In Touch</p>

      {/* Description */}
      <p className="text-white/80 max-w-xl mx-auto mb-8">
        For the best French Cuisine experience in the entire city, come on down
        to <br />
        <span className="text-[#FFD700] font-medium">Le Cigare Volant</span>.
      </p>

      {/* Contact Info */}
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold text-[#FFD700]">Tel:</span>{" "}
          981-904-4614
        </p>
        <p>
          <span className="font-semibold text-[#FFD700]">Address:</span> 201
          Yesler, Seattle WA
        </p>
        <p>
          <span className="font-semibold text-[#FFD700]">Email:</span>{" "}
          cigarevolant@gmail.com
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center space-x-6 text-[#FFD700] text-xl">
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-[#E78A43] transition"
        >
          <Instagram />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-[#E78A43] transition"
        >
          <Facebook />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-[#E78A43] transition"
        >
          <Twitter />
        </a>
      </div>
    </div>
  );
};

export default Location;
