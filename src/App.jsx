import { useEffect, useState } from 'react';
import Header from './components/1-Header/Header';
import Hero from './components/2-Hero/Hero';
import Main from './components/3-Main/Main';
import Contact from './components/4-Contact/Contact';
import Footer from './components/5-Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import SwiperCarousel from './components/Swiper/SwiperCarousel';

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div id="up" className='container'>
          <Header />
          <Hero />
          <div id="projects" className="divider" />
          <SwiperCarousel />
          <Main />
          <div className="divider" />
          <Contact />
          <div className="divider" />
          <Footer />
          <a style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }} href="#up">
            <button className="icon-keyboard_arrow_up scroll2Top"></button>
          </a>
        </div>
      )}
    </>
  );
}

export default App;
