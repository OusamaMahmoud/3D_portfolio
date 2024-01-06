import React from "react";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";
const InfoBox = ({ text, btnText, link }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue mx-5 py-4 px-8 text-white">
      Hi , I am <span className="font-semibold">Osama Shata</span> 👋
      <br />A Software Developer from Egypt
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Welcome to my about section! Here, you can learn more about my background, experience, and passion for software development. I invite you to explore my journey and gain a deeper understanding of the skills and values I bring to the table."
      }
      link={"/about"}
      btnText={"Learn More"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Welcome to my projects page! Here, you'll find a collection of my work that showcases my skills and expertise as a software developer. Feel free to explore each project to gain insight into my capabilities and the technologies I've utilized"
      }
      link={"/projects"}
      btnText={"Visit My Portdolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? I'm just a few Keystrokes away"
      }
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
