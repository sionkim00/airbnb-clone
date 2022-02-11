import React from "react";

export default function StaysHeader({ length }) {
  return (
    <div className="flex justify-between items-center mt-5 md:mt-10">
      <h2 className="font-extrabold text-xl inline-block">Stays in Seoul</h2>
      <p className="inline-block text-gray-600">{length}+ stays</p>
    </div>
  );
}
