import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Sabuj Adak</span>| Full-Stack Developer Portfolio
      </h1>
      <p>
        A responsive developer portfolio designed to showcase my technical
        skills, featured projects, professional experience, education, and
        achievements, with a focus on modern web development and clean user
        experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
