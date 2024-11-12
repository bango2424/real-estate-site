import React, { useState } from "react";
import 'react-accessible-accordion/dist/fancy-example.css';
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
import './value.css';

export const data = [
  {
    icon: <HiShieldCheck />,
    heading: "Best interest rates on the market",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: <MdCancel />,
    heading: "Prevent unstable prices",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    icon: <MdAnalytics />,
    heading: "Best price on the market",
    detail:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
];

export default function Value() {
  const [selected, setSelected] = useState(null);

  
  function HandleClose(index) {
    setSelected(selected === index ? null : index);
  }

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>  
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span> 
          <span className="secondaryTextt">
            We are always ready to give you the best affordable homes, 
            <br />on the mainland and Island. Home is a place of comfort and relaxation.
          </span>

          <div className="accordion">
            {data && data.length > 0 ? 
              data.map((item, index) => (
                <div key={index} className="accordion-item">
                  <div className="accordion-header" onClick={() => HandleClose(index)}>
                    <h3>{item.icon}</h3>
                    <h2>{item.heading}</h2>
                  </div>
                  {selected === index && (
                    <div className="accordion-content">
                      <span>{item.detail}</span>
                    </div>
                  )}
                </div>
              ))
            : null }
          </div>
        </div>
      </div>
    </section>
  );
}
