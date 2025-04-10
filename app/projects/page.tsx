'use client';
import Image from "next/image";
import img1 from "../../public/imgs.jpeg";
import img2 from "../../public/img4.jpeg";
import img3 from "../../public/11.jpeg";
import img4 from "../../public/img6.jpeg";
import ReactLenis from "lenis/react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { gsap } from "gsap";

const Projects = () => { // Renamed to start with an uppercase letter
  function slideInOut() {
    const timeline = gsap.timeline();

    // Create a reveal animation effect
    timeline.to(".projects", {
      clipPath: "circle(0% at 50% 50%)",
      duration: 0.8,
      ease: "power2.inOut",
    });

    timeline.fromTo(
      ".details",
      { clipPath: "circle(0% at 50% 50%)" },
      {
        clipPath: "circle(150% at 50% 50%)",
        duration: 0.8,
        ease: "power2.inOut",
      }
    );
  }

  const Router = useTransitionRouter();
  return (
    <ReactLenis root>
      <div className="projects">
        <div className="images">
          <Link
            href="/details"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              Router.push("details", {
                onTransitionReady: slideInOut,
              });
            }}
          >
            <Image src={img3} alt="img1" />
          </Link>
          <Image src={img2} alt="img1" />
          <Image src={img1} alt="img1" />
          <Image src={img4} alt="img1" />
        </div>
      </div>
    </ReactLenis>
  );
};

export default Projects;