import React, { useEffect, useState } from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
import NavPage from "./NavPage";
import SwiperCarousel from "./SwiperCarousel";
import {liberia,obama,rivonia} from "./LongText";
import * as FAIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as GrIcons from "react-icons/gr"
import CopyToClipboard from 'react-copy-to-clipboard';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';



import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";





const override = css`
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%)
`;


function LandingPage() {

    const [result, setResult] = useState("")
    const [poorNetwork, setPoorNetwork] = useState("")
    const [navSlide, setNavSlide] = useState(true)
    const [copyQuote, setCopyQuote] = useState(false)
    const [loading, setLoading] = useState(false);

    
    


    const output = ()=>{
        setNavSlide(!navSlide)
    }


    const copied = ()=>{
        setCopyQuote(true)
    }


    tippy('.copy', {
        content: "Copied",
        trigger:"click",
        duration:0
      });

      tippy('#phone', {
        content: "2347037447428",
      });

      tippy('#instagram', {
        content: "@snowdenmoses",
      });

      tippy('#twitter', {
        content: "@snowdenmoses",
      });


 
    const quotes =  async ()=>{
        try{

            const results  = await fetch("https://api.quotable.io/random")
            const toJson = await results.json()
             setResult(toJson)

        }
        catch(error){
            setPoorNetwork("No/Poor Network, can't load quotes")
        }

    }

    useEffect(()=>{
        quotes()
        setLoading(true)
        setTimeout(()=>{setLoading(false)},5000)
       
        
    },[])



    
    return (
<div>
        {loading
            ?
            <ClimbingBoxLoader css={override} color={"#000"} loading={loading} size={20} />
            :
     <div className='landing'>

        
        
    
            <div className='container'>
                    
                       
                        
                        <div className={navSlide ?"navSection":"navSectionActive"}>
                            <AiIcons.AiOutlineClose className='menu-close' onClick={()=>setNavSlide(!navSlide)}/>
                            <NavPage/>
                        </div>
                    <div className='section1'>
                            <ul className="social-navigation"> 
                                <li id="twitter"><GrIcons.GrTwitter/></li>
                                <li id="instagram"><GrIcons.GrInstagram/></li> 
                                <li id="phone"><GrIcons.GrPhone/></li> 

                            </ul>
                        <div> 
                            <FAIcons.FaBars className="bar" onClick={output}/>
                        </div>
                        <SwiperCarousel/>
                    </div>




                    <div className='section2'>
                        <ul className="navigation"> 
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        
                    </div>


                    <div className='section3'>
                        <div>
                            <span className='section3Header'>The Liberia Story</span>
                        </div>
                        <div className='section3body'>
                            <span><img src={require("../images/Liberia1.jpg")}/></span>
                            <span className='section3LongText'>{liberia}
                            </span>
                        </div>
                        
                    </div>

                    
                    <div className='api-content'>
                        <div>
                            <h2> {result?result.content:poorNetwork} </h2>
                            <p>{result.author}</p>
                        </div>
                        
                        
                            {result?
                            <div className='buttons'>
                        
                                <button className='getQuotes' onClick={quotes}>Get Quote</button>
                                
                                <CopyToClipboard text={result.content}>
                                        <button className='copy' onClick={copied}>Copy Text</button>
                                </CopyToClipboard> 
                            
                            </div>
                            :""
                                    
                           
                               
                            }
                            
                        
                        
                    </div>

                    {/* <div className='section4'>
                        
                    </div> */}

                    <div className='section5'>
                    <div>
                            <span className='section5Header'>Obama, The Audacity of Hope</span>
                        </div>
                        <div className='section5body'>
                            <span className='section5LongText'>{obama.slice(0,obama.length)}
                            </span>
                            <span><img src={require("../images/obama2.jpg")}/></span>
                        </div>
                        
                    </div>


                    <div className='section3'>
                        <div>
                            <span className='section3Header'>The Rivonia Trial</span>
                        </div>
                        <div className='section3body'>
                            <span><img src={require("../images/rivonia-trial.jpg")}/></span>
                            <span className='section3LongText'>{rivonia}
                            </span>
                        </div>
                        
                    </div>


                    <div className='footer'>
                        
                        
                            <ul className="footer-navigation"> 
                                <li id="twitter"><GrIcons.GrTwitter/></li>
                                <li id="instagram"><GrIcons.GrInstagram/></li> 
                                <li id="phone"><GrIcons.GrPhone/></li> 

                            </ul>

                            <ul className="footer-copyright"> 
                                <li>@Copyright {new Date().getFullYear()}</li>

                            </ul>
                        </div> 

                
                    
                
            </div>
               

      </div>  
       }
</div> 
    );


        }
  
  
  export default LandingPage;