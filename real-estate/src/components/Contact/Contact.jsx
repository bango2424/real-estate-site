import React from "react"
import './Contact.css'
import { MdCall } from "react-icons/md"


export default function Contact () {




    return (
        <section   className="c-wrap" >
            <div className="c-container">
                <div className="flexColStart c-left">

                <span className="orangeText" >Contact Us</span>
                <span className="primaryText">We are on all platforms</span>
                <span className="secondaryText" >Our customer support service is always ready to help </span>

                <div className="flexColStart contactModes">
                    <div className="flexColStart row">
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <MdCall size={25} />

                                </div>
                                <div className="flexStart detail">
                                    <span>Call</span>
                                    <span>70 18 78 0492</span>
                                    <button className="btn">call now</button>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="flexColStart row">
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <MdCall size={25} />

                                </div>
                                <div className="flexStart detail">
                                    <span>Call</span>
                                    <span>70 18 78 0492</span>
                                    <button className="btn">call now</button>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="flexStart row">
                        <div className="flexStart mode">
                            <div className="flexStart">
                                <div className="flexStart icon">
                                    <MdCall size={25} />

                                </div>
                                <div className="flexStart detail">
                                    <span>Call</span>
                                    <span>70 18 78 0492</span>
                                    <button className="btn">call now</button>

                                </div>

                            </div>

                        </div>

                    </div>
                   
                    


                </div>
                

                </div>

                <div className="c-right ">
                    <div className="image-co">
                        <img src="contact.jpg" alt="" />

                    </div>

                </div>

            </div>
        </section>
    )
}