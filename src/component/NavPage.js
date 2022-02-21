import React, { useEffect, useState } from 'react';
import '../App.css';


function NavPage() {
    return (
      <div className="navPage">
          <ul>
              <li className="home">Home</li>
              <li className="about">About</li>
              <li className="contact">Contact</li>
          </ul>
      </div>
    );
  }
  
  export default NavPage;