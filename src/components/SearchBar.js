import React from "react";

export default function SearchBar() {
  return (
    <div className="px-8 py-4 mt-5 md:mt-0">
      <form>
        <input
          type="text"
          defaultValue="Seoul, Korea"
          className="border rounded-l-xl p-3 w-5/12 shadow-md"
        />
        <input
          type="number"
          placeholder="Add guests"
          className="border p-3 w-5/12 placeholder:text-gray-300 shadow-md"
        />
        <button className="border rounded-r-xl p-3 w-2/12 text-pink-400 shadow-md">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
