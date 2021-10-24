import React, {useContext} from "react";
import "../StartupProjects/StartupProjects.scss";
import {feedback} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function TechnicalExcellence() {
  const {isDark} = useContext(StyleContext);
  if (!feedback.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="techexcellence">
        <div>
          <h1 className="project-title">{feedback.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {feedback.subtitle}
          </p>

          <div className="projects-container">
            {feedback.projects.map((value, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  <div className="project-detail">

                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {value}
                    </p>

                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
