import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Osama
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
        <p>
          Software Developer based in Egypt , specializing in technical
          education through hands-on learing and building applications.
        </p>
      </div>
      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
          <p>
            I have recently embarked on my journey as a fullstack developer and
            gained valuable experience during a 6-month internship at Baianat
            company as well as through the EGYPT FWD program. During this time,
            I had the opportunity to work on various projects and gain hands-on
            experience in web development, utilizing technologies such as
            JavaScript, HTML, and CSS. I actively contributed to the development
            of front-end and back-end components, gaining exposure to the full
            software development lifecycle. I also collaborated with senior
            developers and learned best practices in coding, testing, and
            debugging. These experiences have provided me with a solid
            foundation in fullstack development and a strong motivation to
            continue growing in this field.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((ex) => (
              <VerticalTimelineElement
                key={ex.company_name}
                date={ex.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={ex.icon}
                      alt={ex.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  background: ex.iconBg,
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: ex.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {ex.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {ex.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {ex.points.map((point, index) => (
                    <li
                      key={`ex-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
