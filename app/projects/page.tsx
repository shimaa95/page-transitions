'use client';
import Image from "next/image";
import img1 from "../../public/imgs.jpeg";
import img2 from "../../public/img4.jpeg";
import img3 from "../../public/img5.jpeg";  
import img4 from "../../public/img6.jpeg";
import ReactLenis from "lenis/react";

const projects = () => {
  return (
    <ReactLenis root>
    <div className="projects">
      <div className="images">
        <Image src={img2} alt="img1" />
        <Image src={img1} alt="img1" />
        <Image src={img3} alt="img1" />
        <Image src={img4} alt="img1" />
      </div>
    </div>
    </ReactLenis>
  );
};
export default projects;