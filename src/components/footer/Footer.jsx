import React from 'react'
import './footer.css'
import {CiLinkedin} from 'react-icons/ci'
import {FiInstagram,FiFacebook} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Karan Pawar</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/karan-pawar-517544250/" target="_blank"  rel='noreferrer'><CiLinkedin/></a>
        <a href="https://www.instagram.com/_karan_pawar/" target="_blank"  rel='noreferrer'><FiInstagram/></a>
        <a href="https://facebook.com" target="_blank"  rel='noreferrer'><FiFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Karan Pawar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer