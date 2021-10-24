import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  bigProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewTechnicalLeadership = achievementSection.display;
  const viewProject = bigProjects.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/portfolio" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewProject && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewTechnicalLeadership && (
            <li>
              <a href="#technicalleadership">Tech Leadership</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Documentation</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Tech Talks</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#techexcellence">Tech Excellence</a>
            </li>
          )}
          <li>
            <a href="#opportunity">Growth Opportunities</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
