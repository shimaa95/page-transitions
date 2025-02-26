'use client';

import { useRef } from "react";
import ReactLenis from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";


export default function Home() {
  gsap.registerPlugin(useGSAP);
const container = useRef(null);

useGSAP(() => {
  const herotext=new SplitType(".home h1",{types:"chars"});
  gsap.set (herotext.chars,{y:500});
  gsap.to(herotext.chars,
    {
      y:0,
      duration:.8,
      ease:"power3.out",
      stagger:0.075,
      delay:1});
  
},{scope:'container'});

  return (
    <ReactLenis root>
      <div className="home" ref={container}>
        <h1>Smoedesign</h1>
      </div>
    </ReactLenis>
 
  );
}
