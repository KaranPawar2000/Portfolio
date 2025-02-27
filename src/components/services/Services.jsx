import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create user-centered designs for intuitive and seamless digital experiences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conduct user research and testing to understand audience needs.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Collaborate with developers to ensure designs are implemented correctly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimize designs for usability, accessibility, and visual consistency.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop wireframes, prototypes, and high-fidelity mockups for applications.</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design and develop responsive, visually appealing, and user-friendly websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement backend functionality and manage server-side databases effectively.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimize website performance, speed, and overall user experience regularly.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrate APIs, payment gateways, and third-party services seamlessly.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure cross-browser compatibility and mobile responsiveness for all devices.</p>
            </li>
          </ul>
        </article>
                {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop engaging and informative content tailored to target audiences.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create articles, blogs, and social media posts for brand promotion.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Research industry trends to ensure content relevance and originality.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimize content for search engines to improve online visibility.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use captivating visuals, videos, and infographics to enhance content appeal effectively.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services