
import React, { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles.scss';

import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

function App() {
  useEffect(() => {
    initScrollReveal(targetElements, defaultProps);
    initTiltEffect();
  }, []);

  return (
    <div className="app">
      <div id="top"></div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
