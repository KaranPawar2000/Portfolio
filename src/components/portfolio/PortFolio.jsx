import React from "react";
import "./portfolio.css";
import hotel from '../../assets/hotel.png'
import flipkart from "../../assets/flipkart.png";
import blog from "../../assets/blog.png";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio6 from "../../assets/portfolio6.jpg";
import kyc from "../../assets/kyc.png"
const data = [
  {
    id: 1,
    image: hotel,
    title: "Hotel website",
    github: "https://github.com/KaranPawar2000/Hotel_Management_And_Booking",
    demo: "https://github.com/KaranPawar2000/Hotel_Management_And_Booking"
  },
  {
    id: 2,
    image: flipkart,
    title: "Flipkart clone",
    github: "https://github.com/KaranPawar2000/Flipkart-Clone",
    demo: "https://github.com/KaranPawar2000/Flipkart-Clone",
  },
  {
    id: 3,
    image: blog,
    title: "Blog Website",
    github: "https://github.com/KaranPawar2000/Blog_Website",
    demo: "https://github.com/KaranPawar2000/Blog_Website",
  },
  {
    id: 4,
    image: kyc,
    title: "KYC Verification Application",
    github: "http://adminkyc.infinitiodigital.com/dashboard",
    demo: "http://adminkyc.infinitiodigital.com/dashboard",
  }
];

const PortFolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PortFolio;
