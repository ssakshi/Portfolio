import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import TechnicalExcellence from "./TechnicalExcellence/TechnicalExcellence";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Talks from "./talks/Talks";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import GrowthOpportunity from "./growthopportunities/GrowthOpportunity";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={true ? "dark-mode" : null}>
      <StyleProvider value={{isDark: true, changeTheme: changeTheme}}>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Achievement />
        <Blogs />
        <Talks />
        <TechnicalExcellence />
        <GrowthOpportunity />
        <Profile />
        <Top />
      </StyleProvider>
    </div>
  );
};

export default Main;
