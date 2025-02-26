'use client';
import ReactLenis from "lenis/react";

import Image from "next/image";
import img1 from "../../public/img1.jpeg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";



gsap.registerPlugin(useGSAP)

const Info = () => {
  
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const text = new SplitType(".info p", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      })

      text.lines?.forEach((line) => {
        const content = line.innerHTML
        line.innerHTML = `<span>${content}</span>`
      })

      gsap.set(".info p .line span", { y: 400, display: "block" })
      gsap.to(".info p .line span", {
        y: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.075,
        delay: 0.25,
      })

      return () => {
        if (text) text.revert()
      }
    },
    { scope: containerRef, dependencies: [] },
  )


  return (
    <ReactLenis root>
    <div className="info" ref={containerRef}>
      <div className="col">
        <Image src={img1} alt="img1" /></div>
      <div className="col">
        <p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Facilis placeat nisi cupiditate vero aut quae nemo totam,
              libero et officia ullam ad molestias ea quo eaque? Tempora 
              corporis sit harum dicta aliquam sequi, atque repellendus 
              architecto sunt aperiam exercitationem minima minus ratione 
    
        </p>
      </div>
    </div>
    </ReactLenis>
  );
};  
export default Info;