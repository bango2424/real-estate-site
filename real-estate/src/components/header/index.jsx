import React, { useState } from "react";
import { BiMenuAltRight } from 'react-icons/bi';
import './header.css';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [iconOpen, setIconOpen] = useState(false); 

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    const getMenuOpen = (iconOpen) => {
        return {
            right: iconOpen ? '0' : "-100%",
            position: 'absolute', 
        };
    };

    return (
        <section className="h-wrapper" style={{ backgroundColor: darkMode ? '#000000' : '#323031' }}>
            <div className="h-container flexCenter paddings innerWidth">
                <div className="logo">
                <img src="rb_44.png" alt="logo" width={100} className='h-img' />
                </div>
                
                
                <div 

                     className={`flexCenter h-menu ${iconOpen ? 'open' : ''}`}  
                    style={getMenuOpen(iconOpen)}  
                >
                    <a href="#">Residencies</a>
                    <a href="#">Our Value</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Get Started</a>
                   
                </div>
                
            
                <div className="icon-con" onClick={() => setIconOpen(prev => !prev)}>
                    <BiMenuAltRight size={24} />  
                </div>
            </div>
        </section>
    );
}
