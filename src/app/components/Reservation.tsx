"use client";

import React from "react";

export default function Reservation() {
  return (
    <div className="bg-black/70 w-[28rem] py-8 px-6 flex flex-col items-center justify-center border border-white/20 rounded-2xl shadow-lg">
      {/* Title */}
      <h2 className="text-[#FFD700] text-2xl font-serif italic mb-4">
        Reservation
      </h2>

      {/* Form */}
      <form className="flex flex-col w-full space-y-3 text-sm text-[#6B5B4B]">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 rounded bg-white/90 placeholder-[#6B5B4B] focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="px-4 py-2 rounded bg-white/90 placeholder-[#6B5B4B] focus:outline-none"
        />

        <input
          type="number"
          placeholder="Number of Persons"
          className="px-4 py-2 rounded bg-white/90 placeholder-[#6B5B4B] focus:outline-none"
        />
        <div className="flex space-x-2">
          <input
            type="date"
            className="w-1/2 px-3 py-2 rounded bg-white/90 text-[#6B5B4B] focus:outline-none"
          />
          <input
            type="time"
            className="w-1/2 px-3 py-2 rounded bg-white/90 text-[#6B5B4B] focus:outline-none"
          />
        </div>

        {/* Button */}
        <button
          type="button"
          className="mt-4 bg-[#FFD700] text-black font-semibold py-2 rounded hover:bg-[#e6c200] transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
