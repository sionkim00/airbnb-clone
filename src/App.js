import Stay from "./components/Stay";
import stays from "./stays.json";
import StaysHeader from "./components/StaysHeader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <div className="App">
      <div className="px-4 py-6 min-h-screen bg-gray-100">
        {/* header & search bar */}
        <div className="md:flex md:items-center md:justify-between">
          {/* header */}
          <Header />
          {/* search bar */}
          <SearchBar />
        </div>
        {/* stays header */}
        <StaysHeader length={stays.length} />
        {/* stays */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {stays.map((stay, idx) => (
            <Stay stay={stay} />
          ))}
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
