import React, {useContext} from "react";
import "../skills/Skills.scss";
import {illustration, growthopportunity} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/landingPerson.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function GrowthOpportunity() {
  const {isDark} = useContext(StyleContext);
  if (!growthopportunity.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="opportunity">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/dataservices.PNG")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h2
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {growthopportunity.title}{" "}
            </h2>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {growthopportunity.subtitle}
            </p>
            <div>
              {growthopportunity.opportunities.map((value, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {value.heading}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
