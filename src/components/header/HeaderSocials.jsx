import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaInstagramSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/karan-pawar-517544250/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/KaranPawar2000" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/_karan_pawar/" target='_blank'><CiInstagram /></a>
    </div>
  )
}

export default HeaderSocials