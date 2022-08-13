import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import "./Carusel.css";

// import required modules
import page1 from "../../Assest/Page1.jpg";
import page2 from "../../Assest/Page2.jpg";
import page3 from "../../Assest/Page3.jpg";

const Carusel = () => {
  return (
    <div class="hero max-h-screen p-4">
      <div class="hero-content flex-col gap-x-72 lg:flex-row">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="img-fluid border-2 border-gray-500 p-2 rounded-2"
              src={page1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img-fluid border-2 border-gray-500 p-2 rounded-2"
              src={page2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img-fluid border-2 border-gray-500 p-2 rounded-2"
              src={page3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="">
          <h1 class="text-5xl font-bold">Card Title</h1>
          <div className="flex gap-8 text-2xl mt-4">
            <p>
              $499 <del className="text-sm">$2000</del>
            </p>
            <p className="text-green-500">75%Off</p>
          </div>
          <p class="py-6">
            Donec eu ornare mi. Sed finibus condimentum mauris, ut dictum eros
            maximus vitae. Nullam condimentum tortor ac elit feugiat iaculis.
            Aenean mauris nisl, blandit
          </p>
          <button class="btn bg-black text-white">Try this Card</button>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
