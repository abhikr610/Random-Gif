import './App.css';
import Random from "./components/Random"
import Tag from "./components/Tag"

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col background items-center justify-center bg-gray-100">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-10 px-10 py-2 text-3xl font-bold">
        RANDOM GIFS
      </h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
