import { Power3, TweenMax } from 'gsap';
import { useEffect, useRef } from 'react';
import logo from '../../logo.svg';
import './RootAnimation.css';

function RootAnimation() {
  let logoSvg = useRef(null);

  console.log(logoSvg)

  useEffect(() => {
    TweenMax.to(
      logoSvg,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
    )
  },[])

  
  return (
    <div className="App">
      <header className="App-header">
        <img 
        ref={el => {logoSvg = el}}
        src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default RootAnimation;
