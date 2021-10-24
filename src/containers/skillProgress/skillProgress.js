import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h3 className="skills-heading">Key Results & Achievements </h3>
            <ul>          
            {techStack.experience.map((result, i) => {
                return (

                  <li key={i}>
                  <p
                    key={i}
                    className={ "dark-mode  skills-text skills-text-div"
                    }
                  >
                    {result}
                  </p>
                  </li>
                );
              })}
          </ul>
          </div>


          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
