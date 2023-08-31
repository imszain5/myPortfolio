import "./HeroimgStyles.css"
import React from 'react'
import introImg from "../assests/home.jpg"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
         <img className="intro-img" src={introImg} alt="introImg" />
      </div>
      <div className="content">
        <p>HI, I'M Syed Zain</p>
        <h1>React Developer</h1>
        <div>
        <Link to="/project" 
         className="btn">Projects</Link>
         <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Heroimg;
