import React from 'react'
import './about.css'
import ME from '../../assets/karan v32.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0.6+ Years  </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 50+ Completed </small>
            </article>
          </div>
          <p>
          I am a passionate Full-Stack Developer with 6 months of hands-on experience in building web applications. Proficient in React, Spring Boot, Node.js, and MySQL, I specialize in creating scalable and secure applications. I hold an MCA degree from Sardar Patel Institute of Technology, Mumbai, and have worked on different projects . With a strong foundation in front-end and back-end technologies, I strive to develop efficient and user-friendly solutions.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About