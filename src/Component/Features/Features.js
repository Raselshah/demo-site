import React from "react";

const Features = () => {
  return (
    <div className="border-2 size mt-6 border-gray-400 w-5/6 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12 text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-36 h-36 bg-gray-200 rounded-full"></div>
          <p className="mt-2">
            Create your card <br /> in just 5 mins
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-36 h-36 bg-gray-200 rounded-full"></div>
          <p className="mt-2">
            Customize the Text <br /> with "Edit this Page" Option
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-36 h-36 bg-gray-200 rounded-full"></div>
          <p className="mt-2">
            Editing is available <br /> after purchase also
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
