import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import '@fortawesome/fontawesome-free/css/all.css';
function HeroSection() {
  return (
    <div>

{/* <video src='public/videos/video-1.mp4' autoPlay loop muted /> */}
    <div className='hero-container'>
      {/* <video src='public/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* img */}
      <h1>EMPOWERING WOMEN</h1>
      <p>One Step At A Time</p>
       <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> 
    </div>    </div>
  );
}

export default HeroSection;