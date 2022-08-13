import React from "react";
import Carusel from "../Carusel/Carusel";
import Features from "../Features/Features";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg">
      <h2 className="text-4xl text-white text-center p-8">
        Digital Card Details
      </h2>
      <div className="border-2 border-gray-400 bg-white w-5/6 mx-auto size">
        <Carusel />
      </div>
      <Features />
    </div>
  );
};

export default Home;
