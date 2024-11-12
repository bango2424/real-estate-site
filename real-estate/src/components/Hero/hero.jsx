import React from "react"
import './heroo.css'
import CountUp from 'react-countup'



export default function Hero(){



    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="hero-left">
                    <div className="orange-circle"></div>
                    <div className="hero-title" >
                        <h1>Discover Most <br /> Suitable <br /> Properties</h1>

                    </div>
                    <div className="hero-description" >
                            <span className="hero-span">find a variety of lovely homes and apartments</span>
                            <span className="hero-span" >forget all difficulties with finding a Air B</span>

                    </div>
                   <div className="search-bar">
               
                     <input type="text" className="input" />
                     <button>Search </button>

                   </div>
                   <div className="flexCenter stats">
                    <div className="stat">
                        <CountUp start={800} end = {9000} duration={4} />
                        
                        <span>+</span>
                        <span className="secondaryText">Premium Product</span>


                    </div>
                    <div className="flexColStart stat">
                        <CountUp start={1900} end = {2000} duration={4} />
                        
                        <span>+</span>
                        <span className="secondaryText">Happy Customers</span>


                    </div>
                    <div className="flexColStart stat">
                        <CountUp start={1900} end = {2000} duration={4} />
                        
                        <span>+</span>
                        <span className="secondaryText">Award Winning</span>


                    </div>

                   </div>


                </div>
                <div className="hero-right" >
                    <div className="img-container" >
                        <img src="./hero-image.png" alt="" />
                    </div>
                    

                </div>


            </div>


        </section>
    )
}