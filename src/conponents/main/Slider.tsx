import React from "react";
import SliderSlick from "react-slick";
import Image1 from "./../../assets/image/1.jpg";
import Image2 from "./../../assets/image/2.png";
import Image3 from "./../../assets/image/3.png";
import Image4 from "./../../assets/image/4.jpg";
import "./body.css";

const Slider = () => {
  const settings = {
    dots: false,
    className: "center",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <SliderSlick {...settings} className="slider  lg:px-32">
        <div>
          <img src={Image1} alt="طاقچه" />
        </div>
        <div>
          <img src={Image2} alt="طاقچه" />
        </div>
        <div>
          <img src={Image3} alt="طاقچه" />
        </div>
        <div>
          <img src={Image4} alt="طاقچه" />
        </div>
      </SliderSlick>
    </div>
  );
};

export default Slider;
