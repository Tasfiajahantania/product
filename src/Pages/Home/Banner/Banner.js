import React from "react";
import img1 from "../../../assets/images/banner/banner1.jpg";
import img2 from "../../../assets/images/banner/banner2.jpg";
import img3 from "../../../assets/images/banner/banner3.jpg";
import img4 from "../../../assets/images/banner/banner4.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="carousel mt-8 w-full mb-8 h-1/2">
      <div id="slide1" className="carousel-item relative w-full h-[800px]">
        <div className="carousel-img w-full">
          <img src={img4} alt="/" className="w-full h-[800px]" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Get professional <br />
            photos <br />
            from me
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            I take any kind of pictures. Clients give very good reviews on my
            services
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="carousel-img w-full">
          <img src={img4} alt="/" className="w-full" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Get professional <br />
            photos <br />
            from me
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            I take any kind of pictures. Clients give very good reviews on my
            services
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="carousel-img w-full">
          <img src={img2} alt="/" className="w-full" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Get professional <br />
            photos <br />
            from me
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            I take any kind of pictures. Clients give very good reviews on my
            services
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="carousel-img w-full">
          <img src={img3} alt="/" className="w-full" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Get professional <br />
            photos <br />
            from me
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-xl text-white">
            I take any kind of pictures. Clients give very good reviews on my
            services
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
