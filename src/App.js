import Stay from "./components/Stay";
import stays from "./stays.json";

export default function App() {
  return (
    <div className="App">
      <div className="px-4 py-6 min-h-screen bg-gray-100">
        {/* header & search bar */}
        <div className="md:flex md:items-center md:justify-between">
          {/* header */}
          <h1 className="text-lg text-pink-500 font-bold">
            <i className="fa-brands fa-airbnb"></i> airbnb
          </h1>
          {/* search bar */}
          <div className="px-8 py-4 mt-5"></div>

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
        {/* stays header */}
        <div className="flex justify-between items-center mt-5 md:mt-10">
          <h2 className="font-extrabold text-xl inline-block">
            Stays in Seoul
          </h2>
          <p className="inline-block text-gray-600">{stays.length}+ stays</p>
        </div>
        {/* stays */}
        <div className="space-y-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {stays.map((stay, idx) => (
            <Stay stay={stay} />
          ))}
        </div>
      </div>
    </div>
  );
}
