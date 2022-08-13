import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Features from "./Component/Features/Features";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
