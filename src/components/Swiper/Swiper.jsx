import React from 'react';
import styled from 'styled-components';

const Swiper = () => {
  const Images = [
    {projectTitle: "Template 1", imgPath: "images/Template-1.png", liveLink: "https://fadyalamir.github.io/HTML-CSS-Template-One/"},
    {projectTitle: "Template 2", imgPath: "images/Template-2.png", liveLink: "https://fadyalamir.github.io/HTML-CSS-Template-Two/"},
    {projectTitle: "Template 3", imgPath: "images/Template-3.png", liveLink: "https://fadyalamir.github.io/HTML-CSS-Template-Three/"},
    {projectTitle: "Template 4", imgPath: "images/Template-4.png", liveLink: "https://fadyalamir.github.io/HTML-CSS-Template-Four/"},
    {projectTitle: "Bondi Template", imgPath: "images/Bondi_Template.png", liveLink: "https://fadyalamir.github.io/Bondi-Template/"},
    {projectTitle: "Codelander Landing Page", imgPath: "images/Codelander_Landing_Page.png", liveLink: "https://fadyalamir.github.io/Codelander-Landing-Page/"},
    {projectTitle: "Appexy Landing Page", imgPath: "images/Appexy_Landing_Page.png", liveLink: "https://fadyalamir.github.io/Appexy-Landing-Page/"},
    {projectTitle: "Calculator Application", imgPath: "images/Calculator.png", liveLink: "https://fadyalamir.github.io/Calculator/"},
    {projectTitle: "CRUD Application", imgPath: "images/CRUD_Application.png", liveLink: "https://fadyalamir.github.io/Calculator/"},
    {projectTitle: "Weather Application", imgPath: "images/Weather_Application.png", liveLink: "https://fadyalamir.github.io/Weather-Application/"},
    {projectTitle: "Fresh Cart", imgPath: "images/Fresh_Cart_Application.png", liveLink: "https://fresh-cart-71849.web.app/"},
    {projectTitle: "Admin Dashboard", imgPath: "images/Dashboard_ShadCN.png", liveLink: "https://dashboard-theta-vert-16.vercel.app/"},
  ];

  return (<>
    <p style={{fontSize: "2.3rem", textAlign: "center", marginBottom: "2.7rem"}}>
      My <span style={{color: 'var(--blue)',}}>Projects</span>
    </p>
    <StyledWrapper>
      <div className="slider" style={{ // @ts-ignore 
      "--width": "200px", "--height": "200px", "--quantity": Images.length }}>
        <div className="list">
          {Images.map((img, index) => (
            <div key={index} className="item" style={{ // @ts-ignore
              "--position": index + 1 }}>
              <div className="">
                <a href={img.liveLink} target="_blank" rel="noopener noreferrer">
                  <img src={img.imgPath} alt={`slide-${index}`} />
                  <p style={{textAlign:'center', marginTop:'10px'}}>{img.projectTitle}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  </>);
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: white;
    text-align: center;
  }

  .card p {
    font-size: 14px;
    color: white;
  }

  .slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  }
  .slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }
  .slider .list .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    transition: filter 0.5s;
    animation-delay: calc(
      (10s / var(--quantity)) * (var(--position) - 1) - 10s
    ) !important;
  }
  .slider .list .item img {
    width: 100%;
  }
  @keyframes autoRun {
    from {
      left: 100%;
    }
    to {
      left: calc(var(--width) * -1);
    }
  }
  .slider:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }
  .slider .item:hover {
    filter: grayscale(0);
  }
  .slider[reverse="true"] .item {
    animation: reversePlay 10s linear infinite;
  }
  @keyframes reversePlay {
    from {
      left: calc(var(--width) * -1);
    }
    to {
      left: 100%;
    }
  }`;

export default Swiper;
