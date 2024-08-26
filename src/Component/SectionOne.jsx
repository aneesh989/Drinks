import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Drink.css";

import strawleaf1 from "../assets/strawleaf1.webp";
import strawberry01 from "../assets/strawberry01.webp";
import strawleaf2 from "../assets/strawleaf2.webp";
import strawberry from "../assets/strawberry.webp";
import strawbunch from "../assets/strawbunch.webp";

function SectionOne() {
  useEffect(() => {
    const lenis = new Lenis();
    // lenis.on('scroll', (e) => console.log(e));
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section1",
          start: "50% 50%",
          end: "130% 50%",
          scrub: 1,
        },
      });

      tl.to("#strawleaf1", { top: "120%", left: "80%", rotate: 90 }, "timeO")
        .to("#strawleaf2", { top: "105%", left: "5%", rotate: 120 }, "timeO")
        .to("#strawberry", { top: "115%", left: "5%" }, "timeO")
        .to("#strawbunch2", { top: "150%", left: "25%" }, "timeO")
        .to("#strawbunch", { top: "160%", left: "70%" }, "timeO");
    });

    mm.add("(max-width: 799px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section1",
          start: "50% 50%",
          end: "130% 50%",
          scrub: 1,
        },
      });

      tl.to("#strawleaf1", { top: "120%", left: "80%", rotate: 90 }, "timeO")
        .to("#strawleaf2", { top: "105%", left: "5%", rotate: 120 }, "timeO")
        .to("#strawberry", { top: "125%", left: "5%" }, "timeO")
        .to("#strawbunch2", { top: "110%", left: "15%" }, "timeO")
        .to(
          "#strawbunch",
          { top: "160%", left: "35%", width: "65vw" },
          "timeO"
        );
    });
  }, []);

  return (
    <div className="section section1 d-flex bg-gradient-to-r from-pink-700 via-red-500 to-pink-600 ...">
      <h1>strawberry</h1>
      <img id="strawleaf1" src={strawleaf1} alt="Leaf" />
      <img id="strawbunch2" src={strawberry01} alt="strawberry01" />
      <img id="strawleaf2" src={strawleaf2} alt="Leaf 2" />
      <img id="strawberry" src={strawberry} alt="strawberry" />
      <img id="strawbunch" src={strawbunch} alt="strawbunch" />
    </div>
  );
}

export default SectionOne;
