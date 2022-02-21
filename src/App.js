import React from 'react';
import './App.css';
import LandingPage from "./component/LandingPage.js"
import About from "./component/About"
import Home from "./component/Home"
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';

const PUBLIC_URL = "theblackstories.online"

function App() {
  return (
    <Router> 
      <div className="App">
      <Routes>
          <Route path={`${process.env.PUBLIC_URL}/landingPage`} element={<LandingPage/>}/>
          <Route path={`${process.env.PUBLIC_URL}/about`} element={<About/>}/>
          <Route path={`${process.env.PUBLIC_URL}/`} exact element={<Home/>}/>
      </Routes>
          
        
        
        
      </div>
    </Router>
  );
}

export default App;
