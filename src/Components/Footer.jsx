import './FooterStyles.css'
import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='Footer'>
    <div className='Footer-container'>
       <div className='left'>
        <div className='location'>
            <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }}/>
            <div>
                <p>123 Housing Society</p>
                <p>Pakistan.</p>
            </div>
        </div>
        <div className='phone'>
            <h4><FaPhone size={20} style={{ color:"#fff", marginRight:"2rem"
            }}/>
            1-2323-343-23</h4>
        </div>
        <div className='email'>
            <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem"
            }}/>
            info@gmail.com</h4>
        </div>
       </div>
       <div className='right'>
        <h4>About the Company</h4>
        <p>This is me Syed Zain. CEO and Founder of Process. I enjoy 
        discussing new projects and design challanges.</p>
        <div className='social'>
        <FaFacebook size={20} style={{ color:"#fff", marginRight:"2rem"
            }}/>
            <FaTwitter size={20} style={{ color:"#fff", marginRight:"2rem"
            }}/>
            <FaLinkedin size={20} style={{ color:"#fff", marginRight:"2rem"
            }}/>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Footer;
