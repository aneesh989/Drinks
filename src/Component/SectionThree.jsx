import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import "./Drink.css";
import passionfruit from '../assets/passionfruit.webp';
import pineapplecut from '../assets/pineapplecut.webp';
import strawberry01 from '../assets/strawberry01.webp';
import pineapple from '../assets/pineapple.webp';
import strawberry from '../assets/strawberry.webp';
import yellow from '../assets/yellow.webp';

function SectionThree() {
  useEffect(() => {
    const lenis = new Lenis();
    // lenis.on('scroll', (e) => console.log(e));
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    let mm2 = gsap.matchMedia();

    mm2.add("(max-width: 799px)", () => {
      let tl2 = gsap.timeline({
          scrollTrigger: {
              trigger: '.section3',
              start: '0% 90%',
              end: '100% 100%',
              scrub: 1,
              markers: true
          }
      });
      tl2.from('.pineapplecut', {
          y: 500,
          x: -900,
          rotate: -90,
      }, 'time1')
          .from('#pineapple', {
              y: 300,
              x: -700,
              rotate: -90,
              
          }, 'time1')
          .from('.passionfruit', {
              y: 500,
              x: -900,
              rotate: -90,
          }, 'time1')
          .from('#yellow', {
              y: 300,
              x: -700,
              rotate: -90,
          }, 'time1')
          .from('#resp-strawbunch', {
              y: 500,
              x: 900,
              rotate: 90,
          }, 'time1')
          .from('#resp-strawberry', {
              y: 300,
              x: 700,
              rotate: 90,
          }, 'time1')
  });
}, []);
  return (
    <div className="section d-flex section3">
      <div className="card d-flex-c">
        <div className="img-div d-flex">
          <img className='pineapplecut' src={pineapplecut} alt="Pineapple Cut" />
          <img id="pineapple" className=' w-full max-h-screen' src={pineapple} alt="Pineapple" />
        </div>
        <h1 className="mainHeading">pineapple</h1>
        <button className='btn'>Buy Now</button>
      </div>
      <div className="card d-flex-c">
        <div className="img-div d-flex">
          <img id="resp-strawbunch" src={strawberry} alt="Resp strawberry" />
          <img id="resp-strawberry" src={strawberry01} alt="Resp strawberry" />
        </div>
        <h1 className="mainHeading">strawberry</h1>
        <button className='btn'>Buy Now</button>
      </div>
      <div className="card d-flex-c">
        <div className="img-div d-flex">
          <img  className='passionfruit' src={passionfruit} alt="passionfruit" />
          <img id="yellow" src={yellow} alt="Yellow" />
        </div>
        <h1 className="mainHeading">yellow</h1>
        <button className='btn'>Buy Now</button>
      </div>
    </div>
  );
}

export default SectionThree;
