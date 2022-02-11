import React from "react";

export default function Stay({ stay }) {
  return (
    <div className="text-sm">
      {/* stay image */}
      <img
        src={stay.photo}
        alt="picture of a stay"
        className="rounded-3xl max-h-60 w-full bg-cover"
      />
      {/* Stay quick descriptions */}
      <div className="flex justify-between items-center mt-4">
        {stay.superHost && (
          <span className="px-3 p-1 border-2 border-black rounded-full">
            Super Host
          </span>
        )}
        <span className="text-gray-500">
          {stay.type} -{" "}
          {stay.beds > 1 ? `${stay.beds} beds` : `${stay.beds} bed`}
        </span>

        {/* Stay ratings */}
        <span>
          <i className="fa-solid fa-star text-pink-400"></i> {stay.rating}
        </span>
      </div>
      {/* Title */}
      <h2 className="font-semibold text-lg mt-3">{stay.title}</h2>
    </div>
  );
}