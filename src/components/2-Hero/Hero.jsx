import './Hero.css';
import Lottie from 'lottie-react';
import devloperAnimation from "../../animation/developer.json";
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function Hero() {
  const lottieRef = useRef(null);
  
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.2);
    }
  }, []);

  return (
    <section id="about" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img 
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1.1)"}}
          transition={{damping: 6, type: "spring", stiffness: 100}}
          src="./me.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        className="title">Frontend Developer (React)</motion.h1>
        <p className="sub-title">I'm Fady Alamir, a Frontend Developer specializing in React. I build seamless and interactive user experiences, focusing on modern web technologies and high-performance solutions. Passionate about innovation and web development, I strive to create impactful digital experiences.</p>
        <div className="all-icons flex">
          <a href="https://www.facebook.com/fadyalamir77" target="_blank"><div style={{fontSize: 26}} className="icon icon-facebook"></div></a>
          <a href="https://www.linkedin.com/in/fady-alamir77/" target="_blank"><div className="icon icon-linkedin"></div></a>
          <a href="https://github.com/fadyalamir" target="_blank"><div className="icon icon-github"></div></a>
          <a href="https://wa.me/201097604425" target="_blank"><div className="icon icon-whatsapp"></div></a>
          <a href="https://x.com/fady_alamir" target="_blank"><div className="icon icon-twitter"></div></a>
          <a href="https://www.instagram.com/fady_alamir77/" target="_blank"><div className="icon icon-instagram"></div></a>
        </div>
        <Button/>
      </div>
      <div className="right-section animation">
        <Lottie lottieRef={lottieRef} className="developer-animation" animationData={devloperAnimation} />
      </div>
    </section>
  )
}
