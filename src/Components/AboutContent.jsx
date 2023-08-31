import { Link } from 'react-router-dom';
import './AboutContentStyles.css'
import React from 'react'
import picture from '../assests/picture.jpg';
import react1 from '../assests/react1.jpg'; 

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>I'm a react Front-End Developer. I create 
            responsive secure websites for 
            my clients. </p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={picture}
                    className='img' alt='true'
                />
            </div>
            <div className='img-stack bottom'>
                <img src={react1}
                    className='img' alt='true'
                />
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutContent;
