
import React, {useEffect, useRef} from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
import { gsap } from "gsap";

function Home() {


  useEffect(() => {
    // gsap.to('.homePage',.5,{css:{visibility:"visible"}})
    const tl = gsap.timeline()
    tl.from(".main-image", 1, {
       x: "-1500" ,
       ease: "power2.inOut",
      
      })
      .from(".main-image", 1.6, {
        scale:1.5,
        overflow:"hidden",
        ease: "power2.outIn",
       
       })

    .to(".continue", 1.5, { 
      autoAlpha:1,
      top:"35vh",
      ease: "power2.inOut"
      
    }
    
    );
  },[]);

    return (
      <div className="homePage">
          <div className='container1'>
            <span > <Link to="/landingPage" className='continue' >Click to Continue</Link></span>
            <img src={require("../images/Wole Soyinka.jpg")} className='main-image'/>
            
          </div>
      </div>
    );
  }
  
  export default Home;