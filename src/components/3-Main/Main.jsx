import { useState } from "react";
import "./Main.css";
import { motion, AnimatePresence } from "framer-motion";

const myProjects = [
  {projectTitle: "Template 1", category: "htmlAndCss", imgPath: "images/Template-1.png", subtitle: "A sleek and fully responsive website crafted with pure HTML and CSS.", liveLink: "https://fadyalamir.github.io/HTML-CSS-Template-One/", repoLink: "https://github.com/fadyalamir/HTML-CSS-Template-One"},
  {projectTitle: "Template 2", category: "htmlAndCss", imgPath: "images/Template-2.png", subtitle: "A modern and well-structured web template built using HTML and CSS.", liveLink: "https://fadyalamir.github.io/HTML-CSS-Template-Two/", repoLink: "https://github.com/fadyalamir/HTML-CSS-Template-Two"},
  {projectTitle: "Template 3", category: "htmlAndCss", imgPath: "images/Template-3.png", subtitle: "A beautifully designed webpage showcasing HTML and CSS capabilities.", liveLink: "https://fadyalamir.github.io/HTML-CSS-Template-Three/", repoLink: "https://github.com/fadyalamir/HTML-CSS-Template-Three"},
  {projectTitle: "Template 4", category: "htmlAndCss", imgPath: "images/Template-4.png", subtitle: "An elegant and fully optimized HTML and CSS web design.", liveLink: "https://fadyalamir.github.io/HTML-CSS-Template-Four/", repoLink: "https://github.com/fadyalamir/HTML-CSS-Template-Four"},
  {projectTitle: "Bondi Template", category: "bootstrap", imgPath: "images/Bondi_Template.png", subtitle: "A stunning, mobile-friendly website built with Bootstrap for a seamless user experience.", liveLink: "https://fadyalamir.github.io/Bondi-Template/", repoLink: "https://github.com/fadyalamir/Bondi-Template"},
  {projectTitle: "Codelander Landing Page", category: "tailwind", imgPath: "images/Codelander_Landing_Page.png", subtitle: "A high-performance landing page powered by Tailwind CSS for maximum flexibility.", liveLink: "https://fadyalamir.github.io/Codelander-Landing-Page/", repoLink: "https://github.com/fadyalamir/Codelander-Landing-Page"},
  {projectTitle: "Appexy Landing Page", category: "tailwind", imgPath: "images/Appexy_Landing_Page.png", subtitle: "A visually appealing and fast-loading webpage built with Tailwind CSS.", liveLink: "https://fadyalamir.github.io/Appexy-Landing-Page/", repoLink: "https://github.com/fadyalamir/Appexy-Landing-Page"},
  {projectTitle: "Calculator Application", category: "javascript", imgPath: "images/Calculator.png", subtitle: "A fully functional calculator app developed with JavaScript for real-time calculations.", liveLink: "https://fadyalamir.github.io/Calculator/", repoLink: "https://github.com/fadyalamir/Calculator"},
  {projectTitle: "CRUD Application", category: "javascript", imgPath: "images/CRUD_Application.png", subtitle: "A dynamic web application implementing Create, Read, Update, and Delete operations using JavaScript.", liveLink: "https://fadyalamir.github.io/CRUD-Application/", repoLink: "https://github.com/fadyalamir/CRUD-Application"},
  {projectTitle: "Weather Application", category: "javascript", imgPath: "images/Weather_Application.png", subtitle: "A real-time weather forecasting app fetching live data using JavaScript APIs.", liveLink: "https://fadyalamir.github.io/Weather-Application/", repoLink: "https://github.com/fadyalamir/Weather-Application"},
  {projectTitle: "Fresh Cart", category: "react", imgPath: "images/Fresh_Cart_Application.png", subtitle: "A feature-rich e-commerce platform developed with React for a seamless shopping experience.", liveLink: "https://fresh-cart-71849.web.app/", repoLink: "https://github.com/fadyalamir/Fresh-Cart"},
];

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      return item.category === buttonCategory;
    })
    setArr(newArr);
  }

  return (
    <main className="flex">
      <section className="flex left-section">
        <button onClick={() => {
          setCurrentActive("all");
          setArr(myProjects);
        }} className={currentActive === "all" ? "active" : null}>All Projects</button>
        <button onClick={() => {
          handleClick("htmlAndCss");
        }} className={currentActive === "htmlAndCss" ? "active" : null}>HTML & CSS</button>
        <button onClick={() => {
          handleClick("bootstrap");
        }} className={currentActive === "bootstrap" ? "active" : null}>Bootstrap</button>
        <button onClick={() => {
          handleClick("tailwind");
        }} className={currentActive === "tailwind" ? "active" : null}>Tailwind</button>
        <button onClick={() => {
          handleClick("javascript");
        }} className={currentActive === "javascript" ? "active" : null}>JavaScript</button>
        <button onClick={() => {
          handleClick("react");
        }} className={currentActive === "react" ? "active" : null}>React</button>
        <button onClick={() => {
          handleClick("nextjs");
        }} className={currentActive === "nextjs" ? "active" : null}>Next.js</button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{type: "spring", damping: 8}}
              key={item.imgPath} className="card">
                <img width={266} src={item.imgPath} alt="" />
                <div style={{width: "266px"}} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.subtitle}</p>
                  <div className="flex icons">
                    <div style={{gap: "11px"}} className='flex'>
                      <a href={item.liveLink} className="icon-link"></a>
                      <a href={item.repoLink} className="icon-github"></a>
                    </div>
                    <a className="link flex" href="https://github.com/fadyalamir">
                      more <span style={{alignSelf: "center"}} className="icon-arrow-right-circle"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </section>
    </main>
  )
}
