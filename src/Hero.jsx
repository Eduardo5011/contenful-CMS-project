import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contenful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio optio
            saepe cum recusandae cumque officia molestiae facilis tempore in.
            Aliquam ut repudiandae ex quo reiciendis illum numquam suscipit amet
            a.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and browser" className="img"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
