"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitType from "split-type"

export default function Home() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const herotext = new SplitType(".home h1", { types: "chars" })

      if (herotext.chars) {
        gsap.set(herotext.chars, { y: 400 })

        gsap.to(herotext.chars, {
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.075,
          delay: 1,
        })
      }
    },
    { scope: containerRef, dependencies: [] },
  )

  return (
    <div ref={containerRef} className="home">
      <h1>Smoedesign</h1>
  
    </div>
  )
}

