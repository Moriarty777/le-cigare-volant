"use client";

import { useState } from "react";

const menuData = {
  Starters: [
    {
      name: "French Onion Soup",
      description: "Rich broth with caramelized onions & Gruyère",
      price: "$9",
    },
    {
      name: "Escargot",
      description: "Garlic-buttered snails with herbs",
      price: "$12",
    },
  ],
  Mains: [
    {
      name: "Duck à l'Orange",
      description: "Roast duck with orange glaze",
      price: "$22",
      pairing: "Pairs well with Merlot 🍷",
    },
    {
      name: "Coq au Vin",
      description: "Braised chicken in red wine",
      price: "$20",
      pairing: "Best enjoyed with Pinot Noir 🍷",
    },
  ],
  Desserts: [
    {
      name: "Crème Brûlée",
      description: "Vanilla custard with caramelized sugar",
      price: "$8",
    },
    { name: "Tarte Tatin", description: "Upside-down apple tart", price: "$9" },
  ],
  Wine: [
    {
      name: "Château Margaux",
      description: "Premier Grand Cru from Bordeaux",
      price: "$60",
    },
    { name: "Chablis", description: "Crisp white from Burgundy", price: "$45" },
  ],
};

const icons = {
  Starters: "🥖",
  Mains: "🍽️",
  Desserts: "🍰",
  Wine: "🍷",
};

export default function Menu() {
  const [selectedTab, setSelectedTab] =
    useState<keyof typeof menuData>("Starters");

  return (
    <div className="bg-[#ebeae8] text-[#6B5B4B] py-12 z-20 rounded-lg">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-serif text-[#E78A43] mb-4">Our Menu</h2>
        <p className="italic text-lg mb-8">
          A curated selection by Dr. Frasier Crane.
        </p>

        <div className="flex justify-center my-4">
          <span className="text-[#E78A43] text-xl">~ ~ ~ ~ ~ ~ ~</span>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedTab(category as keyof typeof menuData)}
              className={`px-4 py-2 border-b-2 ${
                selectedTab === category
                  ? "border-[#E78A43] text-[#E78A43]"
                  : "border-transparent hover:text-[#FFD700]"
              } transition font-medium`}
            >
              {icons[category as keyof typeof icons]} {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid gap-6 max-w-3xl mx-auto text-left">
          {menuData[selectedTab].map((item, idx) => (
            <div
              key={idx}
              className="border-b border-[#D4AF37]/30 pb-4 hover:bg-[#FFD700]/10 transition rounded-lg px-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-[#e2c103] font-semibold">
                  {item.price}
                </span>
              </div>
              <p className="text-sm italic text-[#6B5B4B]">
                {item.description}
              </p>
              {"pairing" in item && (
                <p className="text-xs italic text-[#6B5B4B] mt-1">
                  {item.pairing}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
