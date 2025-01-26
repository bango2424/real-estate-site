import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import r1 from "../../../public/r1.png";
import r2 from "../../../public/r2.png";
import r3 from "../../../public/r3.png";
import "./style.css";

export const data = [
  {
    name: "Aliva Priva Jardin",
    price: "47,043",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    image: r1,
  },
  {
    name: "Asatti Garden City",
    price: "66,353",
    detail:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    image: r2,
  },
  {
    name: "Citralan Puri Serang",
    price: "35,853",
    detail:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    image: r3,
  },
  {
    name: "Aliva Priva Jardin",
    price: "47,043",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    image: r1,
  },
  {
    name: "Asatti Garden City",
    price: "66,353",
    detail:
      "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    image: r2,
  },
  {
    name: "Citralan Puri Serang",
    price: "35,853",
    detail:
      "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    image: r3,
  },
];

export default function Slider() {

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);


  function handlePrevious() {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }


  return (
    <section className="s-wrapper">
      <div className="s-container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
          aria-label="previous slide"
        />

        {data.length > 0 &&
          data.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt=""
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))}

        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
          aria-label="next slide"
        />
      </div>

      <div className="s-contain">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
          aria-label="previous slide"
        />

        {data.length > 0 &&
          data.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt=""
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))}

        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
          aria-label="next slide"
        />
      </div>
      
    </section>

    
  );
}
