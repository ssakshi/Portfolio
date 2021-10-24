/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  baseUrl: "https://ssakshi.github.io/portfolio/",
  username: "ASP",
  title: "Hi All, I'm Sakshi",
  subTitle: emoji(
    "I’ve been working as an active Staff Software Engineer on the Servicing Platform Train for the past 10 months, playing an integral role in driving engineering execution, implementing new technologies to solve complex problems, and mentoring our engineers. I started at FOC as a Senior Software Engineer last year, working up to my current position by proactively seeking ways to contribute to the company’s success and leveraging my 9+ years of production-grade software development experience. A proud graduate of University of Florida, I am currently living in the North Atlanta area with my wife Sakshi. My family is from India, where I grew up and lived until I immigrated to the US in 2013. In my free time, I enjoy meditating, hiking, reading and playing music."
    
    
  ),
  resumeLink:
    "shorty/aspresume",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://git.rockfin.com/apanesar",
  gmail: "sakshikakkar12@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Motivation",
  goalTitle: "What I do?",
  subTitle: "Throughout my career, I've demonstrated a deep-seated drive to take on new challenges and exceed expectations in every role I've taken on. I relish helping people around me. I derive great fulfillment from bringing out the best in myself and the others, leveraging our collective skills to create tangible value for the customer. My leadership style reflects a passion for working with people and a holistic vision for how to best address our industry's most pressing technological challenges. Think globally apply locally!",
  skills: [
    emoji(
      "⚡ Develop and design robust distributed applications."
    ),
    emoji("⚡ Improved the engineering culture of my train."),
    emoji(
      "⚡ Mentorship, Engineering Guidance and Technical Leadership. "
    ),
    emoji(
      "⚡ Lead technical initiatives for my train."
    ),
    emoji(
      "⚡ Solve critical challenges, performance and memory leak issues for the train."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Florida",
      logo: require("./assets/images/uflogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "2014",
      descBullets: [
        "Received scholarship to do Masters.",
        "Ranked Top 5 in the scholarship program."
      ]
    },
    {
      schoolName: "Jaypee University of Information Technology",
      logo: require("./assets/images/juitlogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2010",
      desc: "",
      descBullets: [
        "Took courses about Software Engineering, Distributed Systems, Database Systems, Algorithms etc.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    emoji(
        "⚡ Created and executed stream's first Technical Onboarding Program."
      ),    
    emoji(
        "⚡ Major contribution in leading our train in CI/CD initiative."
      ),
    emoji(
        "⚡ Solved multiple criticial performance issues, network pool issues and memory issues."
    ),
    emoji(
      "⚡ Improved the code reviews process end to end, leading to a 48% increase in the code review colloboration."
    ),
    emoji(
      "⚡ Fundamentally changed or created several engineering processes and standards within the train."
    ),
    emoji(
      "⚡ Drove efforts to tune performance of critical services."
    ),
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Rocket Mortgage Servicing",
      companylogo: require("./assets/images/rmslogo.png"),
      date: "May 2020 – Present",
    },
    {
      role: "Member of Technical Staff- Lead (ATL)",
      company: "VMware, VMW Tunnel",
      companylogo: require("./assets/images/vmwlogo.png"),
      date: "March 2018 – May 2020",
    },
    {
      role: "Member of Technical Staff - L2",
      company: "VMware, Email Management",
      companylogo: require("./assets/images/vmwlogo.png"),
      date: "Feb 2016 –  March 2018",
    },
    {
      role: "Software Engineer",
      company: "SumTotal Systems",
      companylogo: require("./assets/images/sumtotallogo.png"),
      date: "May 2015 - Dec 2015",
    },
    {
      role: "Software WebMaster",
      company: "University of Florida",
      companylogo: require("./assets/images/uflogo.png"),
      date: "Sept 2014 – Sept 2015",
    },
    {
      role: "Software Engineer Intern",
      company: "E-Prof Learning Solutions",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2012 – 2013",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Technical Projects",
  subtitle: "SOME OF MY TECHNICAL CONTRIBUTIONS IN THE LAST YEAR.",
  projects: [
    {
      image: require('./assets/images/git.PNG'),
      projectName: "Servicing Git Hooks",
      projectDesc: "Pioneered the implementation of Git Hooks into the Servicing stream to track production delivery, thereby improving visibility into the company and enabling audits of all the work going into main branch. This was vital in upholding the release health, quality assurance and development standards in our deployments. Opened up the platform for SDLC automation, allowing for substantial improvements to the quality and efficiency of development processes. Established pre-flight validation jobs, which are essential for creating effective CI/CD pipelines. Standardized commit message template to guarantee our ability to audit changes going into production.",
      projectDetails: [
        {
          impact: "Lead to much safer and controlled production release.",
          subimpact: "Eliminated the long standing issue of work going to production without testing by explicitly calling out the work items going in release and allowing confirmation of completion. ",
        },
        {
          impact: "Standardized and enforced quality assurance processes.",
          subimpact: "Created a platform to introduce more automation capabilities such as automated deployment documentation and release notes.",
        }
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://confluence/x/8IrDDg"
        },
        {
          name: "Code",
          url: "https://git.rockfin.com/myql-servicing/servicing-git-hooks"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require('./assets/images/dataservices.PNG'),
      projectName: "Data Services",
      projectDesc: "Our train has a goal to create a scalable, cloud-based source of truth for servicing data, organized by entity and can be updated in real time. I contributed to the architecture, engineering implementation, design patterns and testing of the vision. Provided technical guidance to engineers across the entire train and executed a comprehensive [engineering plan], owning the delivery of project to completion. Addressed the most complicated challenges hands on, in order to free up the resources to meet the deadline. Introduced new tech libraries and industry level standards like AutoMapper, Fluent Validations, Transactional APIs, API Centric Exception Handling and resiliency patterns.",
      projectDetails: [
        {
          impact: "Rapid turn around in project delivery.",
          subimpact: "Played an essential role in bringing the delivery schedule back on track.",
        },
        {
          impact: "Growth of the technical team to write high quality APIs.",
          subimpact: "Team learned and implemented microservices design patterns.",
        },
        {
          impact: "Laid the foundation for the API service template.",
          subimpact: "Reducing the development cost to rebuild things on the fly.",
        },
        {
          impact: "Major contribution in the architecture and software design of the system.",
        }
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://confluence/x/VZmbDg"
        },
        {
          name: "Code",
          url: "https://git.rockfin.com/Servicing/Client-Data-Service"
        },
        {
          name: "Architecture",
          url: "https://confluence/plugins/gliffy/viewer.action?inline=false&pageId=245078357&attachmentId=263164578&name=ClientDataService-Phase1&version=3&ceoid=245078357&key=ITServicingArchitecture&lastPage=%2Fpages%2Fviewpage.action%3FpageId%3D245078357&imageUrl=%2Fdownload%2Fattachments%2F245078357%2FClientDataService-Phase1.png%3Fversion%3D3%26modificationDate%3D1610587174000%26api%3Dv2&gonUrl=%2Fdownload%2Fattachments%2F245078357%2FClientDataService-Phase1%3Fversion%3D3%26modificationDate%3D1610587174000%26api%3Dv2"
        },
        {
          name: "Engineering Plan",
          url: "https://confluence/x/po1GE"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require('./assets/images/engineeringmodernization.PNG'),
      projectName: "Engineering Modernization",
      projectDesc: "As we are progressing towards becoming a seasoned train, there is strong need to bring control and direction in our engineering practices. This project is focused on streamlining our engineering practices and process by introducing control and direction, with the goal of improving the code review process, code quality and increasing accountability among engineers. Enforced hard-gate policies to ensure uniform quality standards for unit testing, security, best practices and exception handling, etc. Improved the code review process by pioneeing code sherpas, code review template, and assigment protocol. Conducted multiple presentations, learning sessions, and office hours to distribute knowledge surrounding a new process wtihin our delivery pipeline. Created thorough documentation for engineers to consume including instructions on how to install, use, test, and contribute.",
      projectDetails: [
        {
          impact: "Significantly reduces the development cost with consistent best practices.",
          subimpact: "Allowing developers to focus on business logic.",
        },
        {
          impact: "Builds high performing and secure foundation for new and old services.",
          subimpact: "Reduces the risk of failure in feature delivery.",
        }
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://confluence/x/rglNDg"
        },
        {
          name: "Code Sherpas",
          url: "https://confluence/x/B4vDDg"
        },
        {
          name: "Pull Request Templates",
          url: "https://confluence/x/RZqwDg"
        },
        {
          name: "Style Cop",
          url: "https://confluence/x/CYvDDg"
        },
        {
          name: "Sonar Bot",
          url: "http://saayahealth.com/"
        },
        {
          name: "Code Review Assignment Protocol",
          url: "https://confluence/x/rglNDg"
        },
        {
          name: "Train Effort",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require('./assets/images/qtweet.PNG'),
      projectName: "Servicing Platform Qtweet Forwarder",
      projectDesc: "As we are migrating to the UM Queue, we need to update our services with the UM Queue APIs to forward the Qtweets to the destination. Multiple services in Servicing Platform depends on the Qtweets so we need a fast and effective solution to migrate. With a broader vision in mind, I architected and engineered(assisted) an extensible and generic QTweet forwarding system to forward any SP's QTweet produced in AWS to their On-Prem destinations.",
      projectDetails: [
        {
          impact: "Processed over 19 million QTweet events with no data loss.",
          subimpact: "https://grafana.nonprod.qlmetrics.com/d/ny08IY0Gk/servicing-platform-qtweets-service",
        },
        {
          impact: "Pathway to add new/migrate Qtweet with minimal code change.",
          subimpact: "Adding new QTweet events requiring only the addition of a single file.",
        },
        {
          impact: "Ability to get data analytics on third party communication.",
        }
      ],
      footerLink: [ 
        {
          name: "Architecture",
          url: "https://confluence/plugins/gliffy/viewer.action?inline=false&pageId=201857929&attachmentId=250222320&name=LoanViewedEvent%28Updated--Final%29&version=8&ceoid=201857929&key=ITServicingArchitecture&lastPage=%2Fpages%2Fviewpage.action%3FpageId%3D201857929&imageUrl=%2Fdownload%2Fattachments%2F201857929%2FLoanViewedEvent%2528Updated--Final%2529.png%3Fversion%3D8%26modificationDate%3D1627570463000%26api%3Dv2&gonUrl=%2Fdownload%2Fattachments%2F201857929%2FLoanViewedEvent%2528Updated--Final%2529%3Fversion%3D8%26modificationDate%3D1627570462678%26api%3Dv2"
        },
        {
          name: "Documentation",
          url: "https://confluence/display/ITServicingArchitecture/1825754+-+LoanViewedEvent+in+RMS"
        },
        {
          name: "Qtweet Forwarder",
          url: "https://git.rockfin.com/myql-servicing/207874-qtweets-sqs-push-lambda"
        },
        {
          name: "Qtweet Receiver",
          url: "https://git.rockfin.com/myql-servicing/207896-qtweets-sqs-receive-lambda"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require('./assets/images/earltestframework.PNG'),
      projectName: "Earl Test Framework",
      projectDesc: "Developing an effective, user-friendly platform for automating a wide range of industry level testing strategies under a unified framework, with the goal of eventual transition to a full CI/CD pipeline. The goal of this project is to have integration test, component test and e2e service test on top of common foundation. Earl uses microservices testing strategies to create infrastructure services in dev environment using docker API.",
      projectDetails: [
        {
          impact: "Addresses the persistent lack of automation testing of Microservices.",
        },
        {
          impact: "Reduces development cost by  introducing all the required tool under same hood.",
        },
        {
          impact: "Enables rapid development of automated tests, accelerating reaching the goal of full CI/CD.",     
        }
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://git.rockfin.com/Servicing/FeatureToggleLibrary/blob/master/README.md"
        },
        {
          name: "Code",
          url: "https://git.rockfin.com/Servicing/earl-test-framework"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require('./assets/images/microservicechasis.PNG'),
      projectName: "Servicing Microservices Framework(In Planning Phase)",
      projectDesc: "Contributing to a stream wide goal along with Staffs to design and implement a comprehensive framework for developing production-grade APIs, substantially reducing the time taken by engineers. Standardized the implementation of best practices for API development, providing a centralized support system that’s globally available, compatible across all platform and  addresses cross-cutting concerns (e.g. Traceability, Metrics, Logging, HTTP Clients, Service Connector). This will also help us to have global consistency and maintaince support across Servicing.",
      projectDetails: [
        {
          impact: "Significantly reduces the development cost by providing reusable patterns for APIs.",
          subimpact: " Allowing developers to focus on business logic.",
        },
        {
          impact: "Builds high performing and secure foundation for new and old services.",
          subimpact: " Reduces the risk of failure in feature delivery.",
        }
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://confluence/x/pZmvDw"
        },
        {
          name: "Code",
          url: "https://git.rockfin.com/RocketTechServicing/Servicing-Microservices-Framework"
        },
        {
          name: "In Progress",
        },
        {
          name: "Stream Wide Goal",
        },
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require('./assets/images/rocklib.PNG'),
      projectName: "RockLib Metrics in RMS Services",
      projectDesc: "From POC to e2e implementation, Integrated metrics to ensure all our major services that would be generating the Four Golden Signal metrics to be consumed by our data visualization tool Grafana. I served as the driving force throughout the project, executing all deliverable with a team in a single iteration.",
      projectDetails: [
        {
          impact: "Substantially improved response time of our incidents.",
          subimpact: "On-Call Members have more metrics available to assess service health and impact during tech incidents.",
        },
        {
          impact: "Vital tool for deployment and quality assurance.",
          subimpact: "Engineers have health metrics available to assess production changes and impact of production deployments.",
        }
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://git.rockfin.com/RockLib/RockLib.Metrics"
        },
        {
          name: "Code Example",
          url: "https://git.rockfin.com/myql-servicing/servicing-payments-bff/pull/224/files"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require('./assets/images/rocklib.PNG'),
      projectName: "Revamped Feature Toggle Library",
      projectDesc: "After a production push, RMS-CPU usage was consistently increasing causing a need to recycle the containers every 4 hours. I found that the Servicing Feature Toggle Library can be improvised and can help us to fix the RMS performance issue. I took the initiative to revamp the Library by implementing HTTP-bound optimization, high performance serialization, streaming support, and externalized logging support. ",
      projectDetails: [
        {
          impact: "Fixed the slow CPU leak problem in the RMS API, ",
          subimpact: "allowing the need for the 4-hour container recycle to cease.",
        },
        {
          impact: "Provides ability to use the Servicing Feature Toggle in all services. ",
        }
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://git.rockfin.com/Servicing/FeatureToggleLibrary/blob/master/README.md"
        },
        {
          name: "Code",
          url: "https://git.rockfin.com/Servicing/FeatureToggleLibrary"
        }
        //  you can add extra buttons here.
      ]
    },    
    {
      // image: require('./assets/images/identifiermappedevent.PNG'),
      projectName: "RAID Solicitation",
      projectDesc: "As a stretch assignment, took on building a critical, event-driven feature in 5 days to update RAID in data service using AWS Lambda, SNS, and SQS. Worked quickly to implement an optimal solution to integrate a set of a brand new infrastructure, API endpoints, and database procedures with minimal risk to the existing system.",
      projectDetails: [
        {
          impact: "Captured all new Rocket Account mapping and saves to Client Data Services.",
          subimpact: "Welcome experience, LCSS experience, and other UI experience depends on this feature.",
        },
        {
          impact: "My involvement on stretched bandwidth was critical to meet the release deadline.",
        }
      ],
      footerLink: [
        {
          name: "Architecture",
          url: "https://confluence/plugins/gliffy/viewer.action?inline=false&pageId=295210291&attachmentId=295210295&name=CDS_ETL_Flow&version=5&lastPage=%2Fpages%2Fviewpage.action%3FpageId%3D295210291&imageUrl=%2Fdownload%2Fattachments%2F295210291%2FCDS_ETL_Flow.png%3Fversion%3D5%26modificationDate%3D1628186151000%26api%3Dv2&gonUrl=%2Fdownload%2Fattachments%2F295210291%2FCDS_ETL_Flow%3Fversion%3D5%26modificationDate%3D1628186151000%26api%3Dv2"
        },
        {
          name: "Code",
          url: "https://git.rockfin.com/Servicing/208815-client-identifier-processor-lambda"
        }
        //  you can add extra buttons here.
      ]
    },
    {

      projectName: "Rocket CLI",
      projectDesc: "The RMS Command Line Interface (CLI) is a unified tool to build, develop, deploy, manage and maintain the RMS software cycle. With just one tool to download and configure, we can control multiple RMS services,  speed up development cycle, setup and deploy development environment, automate engineering processes and hard gate standards from the command line. With CLIs, we can easily mash-up multiple tools together to perform advanced tasks. They work well for admin tasks, power-user tasks and engineering tasks. Created an initial framework for a command-line tool to automate common tasks within the software development life cycle.",
      projectDetails: [
        {
          impact: "Reduces development and quality cost by automating redudant task under a command line.",
          subimpact: "",
        }
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://confluence/x/MZk_DQ"
        },
        {
          name: "Code",
          url: "https://git.rockfin.com/servicing-sre/rocket-cli"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Technical Leadership 🏆 "),
  subtitle:
    "Process, Cultural Growth, Mentorship, Programs and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Servicing Onboarding Program",
      subtitle:
      "In order to facilitate a hiring spree aimed at doubling the size of our team, I created a technical onboarding program for newly hired software engineers. This program was the first of its kind within our stream, and I owned its creation end-to-end, from idea to execution. The core of the program is a 7-day crash course, complete with many opportunities for hands-on practice. The crash course is followed by a hack week project where new hires can apply and showcase their skills. Finally, a customized growth plan is developed for each new hire, detailing what work and training they should undertake over the next 90 days to optimize their professional development and equip themselves with the skills they need to excel at the company. The program was wildly successful, efficiently onboarding 7 new engineers. It was highly well-received across the company, and the VP expressed a desire to implement it across the entire stream.",
      impacts: [
        {
          impact: "The first Technical Onboarding Program for Servicing Stream.",
        },
        {
          impact: "Will be used by Rocket Tech Onboarding Team for onboarding new engineers. ",
        },
        {
          impact: "Reduced team member acclimation time from 3 months to less than a month.",
        },
        {
          impact: "Successfully onboarded of 7 new engineers and paved the way for onboarding 20 to 30 engineers over the next 6 months.",
        },
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://git.rockfin.com/Servicing/SP-Documentation/tree/master/SP-Documentation-Site/docs/Onboarding"
        },
        {
          name: "Recording Library",
          url: "https://foc.myskillo.com/#topic-632386"
        },
      ]
    },
    {
      title: "SP Engineering All Hands",
      subtitle:
        "SP Engineering All Hands Meeting is an opportunity for all the engineers to come together and solve technical challenges, do design review of the critical features, attend tech talk, and most importantly learn from each other. It's a weekly meeting that I own, we use this as a platform to grow together. The goal of this meeting is to: ",
      impacts: [
        {
          impact: "Increase our engineering productivity.",
        },
        {
          impact: "Solve complex challenges together.",
        },
        {
          impact: "Proactively build things in a right way.",
        },
        {
          impact: "Encourage group learning.",
        },
        {
          impact: "Do design review of on-going features.",
        },
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://git.rockfin.com/Servicing/SP-Documentation/blob/master/SP-Documentation-Site/docs/EngineeringAllHands/README.md"
        }
      ]
    },
    {
      title: "Mentorship",
      subtitle:
        "I've taken a strong interest in the mentorship of our engineers, making it one of my top priorities to facilitate their professional development in a wide variety of ways. I work hard to remove single points of failure whenever I can, whether it’s by training other engineers on complex processes or flows, or documentation of troubleshooting steps – gaining knowledge in these areas is important but passing it on is absolutely critical.  I am always looking for ways to improve the information sharing and knowledge level of my team and my train. I've introduced new code review strategies, explained design principles, and helped implement industry-level standards in our services. I've provided training in one-on-one sessions to most of our engineers and consistently made myself available to provide technical guidance. My mentorship has been essential in equipping our engineers with the knowledge they need to do their best work as efficiently as possible, empowering them to achieve their full potential and contributing enormously to the success of all our most crucial features and initiatives.",
      impacts: [
        {
          impact: "Working on improving train's engineering velocity.",
        },
        {
          impact: "Currently mentoring more than 10 engineers on regular basis.",
        },
      ],
      footerLink: [
        {
          name: "Feedback",
          url: ""
        }
      ]
    },
    {
      title: "Engineering OKRs",
      subtitle:
      "Key initiator and driver of the Engineering OKRs for our train. Based on the data driven analysis, I figured out the key problems and road blocks in engineering execution. Created Train's Engineering OKRS and driving its execution. The main goal of this is to bring control and structure to the execution.",
    impacts: [
      {
        impact: "Solving key source process problems of my train.",
      },
      {
        impact: "Enforcing awareness and accountability in our execution.",
      },
    ],
    footerLink: [
      {
        name: "Documentation",
        url: "https://git.rockfin.com/Servicing/SP-Documentation/tree/master/SP-Documentation-Site/docs/LearningDayProgram#train-engineering-goals-coming-soon"
      }
    ]
    },
    {
      title: "LDP - Learning Day Program",
      subtitle:
        "The learning day program is an incredible opportunity to continuously grow and extend our learning. This program is specifically designed and structured to provide for high-quality enrichment outside of the regular work that seamlessly aligns with our train goals and stream OKRs. We want to make sure that while developing great products for our clients, we are investing enough time in becoming a strong, well-rounded development team. Created this program and currently driving its execution.",
      impacts: [
        {
          impact: "Working on improving train's engineering velocity.",
        },
        {
          impact: "Increasing senior engineer/SME participation in train contribution and learning opportunities",
        },
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://git.rockfin.com/Servicing/SP-Documentation/blob/master/SP-Documentation-Site/docs/LearningDayProgram/README.md"
        }
      ]
    },
    {
      title: "Code Review Process",
      subtitle:
        "Code reviews suffered from a few key issues in our train. Engineers did not know who to reach out too for reviews, engineers would rubber stamp/approve pull requests, and engineers provided no context within their pull requests. Last year, Josh Zook presented some facts on these issues as well. I took an initiative to address this concern and I revamped the code review process by integrating our code repositories with GitHub Pull Request templates, Code Review Assignment Protocol, code review best practices and Codeowner features.",
      impacts: [
        {
          impact: "Enforced automated collaboration among engineers.",
        },
        {
          impact: "Pioneered code sherpas for CI/CD monitoring in code review process.",
        },
        {
          impact: "Ensured that designated team members were required to view and approve pull requests.",
        },
        {
          impact: "Encourage group learning (learn from each other).",
        },
      ],
      footerLink: [
        {
          name: "Josh Zook Presentation",
          url: ""
        }
      ]
    },
    {
      title: "Revised SP Interview Process",
      subtitle:
        "Contributed in creating a comprehensive interview process from scratch, incorporating team feedback, industry practices, and my own personal experience working at two industry-leading tech companies. The new interview process allowed our team to scale and be efficient amidst a hiring-spree along with limiting bias through detailed guidelines and procedures. I also created unique, experience-based interview questions for the our question bank. I also lead the interview panel from the technical side.",
      impacts: [
        {
          impact: "We conducted 50+ interviews over a span of only 6 months, and we hired 15 engineers.",
        },
        {
          impact: "Framework will be used to double our team in next year.",
        },
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://confluence/x/1gwQDw"
        }
      ]
    },
    {
      title: "Release Strategy Enhancement",
      subtitle:
        "I collaboratively led an initiative to re-vamp the release strategy to build on CI/CD principles. Releases, which traditionally involved a long-lived, dedicated release branch, were complex and inefficient, with difficulties in tracking merge commits and repetitive work between master and release branches. My work in defining a new strategy involving on-demand releases and release-patches, along with a dedicated naming convention, was instrumental in streamlining and simplifying the release process. I also created guidelines for hot-fixes based on the industry’s best practices and my past experience. The creation of these robust practices allowed for less disruption and wasted resources at the time of releases.",
      impacts: [
        {
          impact: "Solved the release branch conflict mess issue.",
        },
        {
          impact: "Created the base to invoke trunk based development.",
        },
        {
          impact: "Proactively build things in a right way.",
        },
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://confluence/x/LgrvDw"
        }
      ]
    },
    {
      title: "Project Bettong",
      subtitle:
        "Built a process to integrate data-driven decisions and KPI metrics for executional efficiency. The new process improved operation efficiency, sped up engineering velocity, reduced development & testing costs, and resolved communication issues. Bridged the gap in business/domain knowledge resulting in increased ownership, dedicated hand-offs, and process improvements for extraneous work encountered. I have conducted multiple RCCA's under this process to figure out the issues in our process and create an action plan on top of the data.",
      impacts: [
        {
          impact: "Tools for evaluating current process and identifying areas for improvement.",
        },
      ],
      footerLink: [
        {
          name: "Documentation",
          url: "https://confluence/x/qJObDg"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Documentation",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.  Some of the documentation I wrote!",

  blogs: [
    {
      url: "https://git.rockfin.com/Servicing/SP-Documentation/tree/master/docs/Onboarding",
      title: "SWE Onboarding Program",
      description:
        "In order to facilitate a hiring spree aimed at doubling the size of our team, I created a technical onboarding program for newly hired software engineers. This program was the first of its kind within our stream, and I owned its creation end-to-end, from idea to execution. The core of the program is a 7-day crash course, complete with many opportunities for hands-on practice. The crash course is followed by a hack week project where new hires can apply and showcase their skills. Finally, a customized growth plan is developed for each new hire, detailing what work and training they should undertake over the next 90 days to optimize their professional development and equip themselves with the skills they need to excel at the company. The program was wildly successful, efficiently onboarding 7 new engineers. It was highly well-received across the company, and the VP expressed a desire to implement it across the entire stream."
    },
    {
      url: "https://confluence/x/B4vDDg",
      title: "Code Sherpas",
      description:
        "The Gatekeeper or Code Sherpas is responsible to monitor the continuous integration pipeline with the engineering process, NFRs, engineering standards and ownership of the code. React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      url: "https://confluence/x/LIqwDg",
      title: "Code Review Process",
      description:
        "Our current code ownership policies and permissions are premature to enforce accountability in maintaining a healthy codebase. In order to achieve this goal, we need to streamline our git permissions. We will be using the Code Review Assignment feature of GitHub. We will be changing the permission structure of each TM in this exercise."
    },
    {
      url: "https://confluence/x/CYvDDg",
      title: "Stylecop - So Stylish!! Clean Code",
      description:
        "StyleCop analyzes C# source code to enforce a set of style and consistency rules. StyleCop used to be a Visual Studio plugin and a NuGet package. You can still use this in Visual Studio 2019, but the current recommended way to use StyleCop is to use the Roslyn-based analyzers."
    },
    {
      url: "https://confluence/x/pZmvDw",
      title: "Servicing Microservices Chassis",
      description:
        "A set of reusable components that address cross cutting concerns, enabling implementation teams to develop production-grade microservices with increased velocity and focus solely on coding main service logic."
    },
    {
      url: "https://confluence/x/1gwQDw",
      title: "SP Interview Process Guide",
      description:
        "A set of protocol to be followed while conducting a technical interview of Software Engineers. We need to follow a structure to have unbiased interview."
    },
    {
      url: "https://git.rockfin.com/Servicing/SP-Documentation/blob/master/SP-Documentation-Site/docs/Standards/ExceptionHandling.md",
      title: "Exception Handling",
      description:
        "As our applications grow, we want to adopt a manageable strategy for handling errors in order to keep the user’s experience consistent and more importantly, to provide us with means to troubleshoot and fix issues that occur."
    },
    {
      url: "https://git.rockfin.com/Servicing/SP-Documentation/blob/master/SP-Documentation-Site/docs/Blogs/MemoryProfilingNET.md",
      title: "Memory Profiling in .NET",
      description:
        "A set of protocol to be followed while conducting a technical interview of Software Engineers. We need to follow a structure to have unbiased interview."
    }, 
    {
      url: "https://confluence/x/y4PFDw",
      title: "Microservices Testing Techniques",
      description:
        "As soon as any small, safe change has been made to a microservice, the microservice can be deployed to production. But how do you know a change is safe? This is where testing and, particularly, test automation come into the picture."
    },   
    {
      url: "https://confluence/x/8IrDDg",
      title: "Servicing Git Hooks Guide",
      description:
        "Git hooks are scripts that run automatically every time a particular event occurs in a Git repository. They let you customize Git’s internal behavior and trigger customizable actions at key points in the development life cycle."
    },   
    {
      url: "https://confluence/x/gZbFDw",
      title: "System Testing",
      description:
        "End to End Tests or System Tests verifies that a system meets external requirements and achieves its goals, testing the entire system(sub system) from end to end."
    },
    {
      url: "https://confluence/x/LgrvDw",
      title: "Release Branching Strategy",
      description:
        "The current release branch strategy involves a single, long-lived release branch. While the single release branch has been in use for several years, there are no clear advantages to this model"
    },
    {
      url: "https://git.rockfin.com/Servicing/SP-Documentation/blob/master/SP-Documentation-Site/docs/Blogs/AutomatedProdPush.md",
      title: "Automated Prod Push Documentation",
      description:
        "We have a vision to automated the release push end to end with a control plane. This iniative is a step forward in that direction."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅."
  ),

  talks: [
    {
      title: "SP Engineer Onboarding Program",
      subtitle: "",
      slides_url: "https://git.rockfin.com/Servicing/SP-Documentation/tree/master/SP-Documentation-Site/docs/Onboarding",
      event_url: "https://rockfin-my.sharepoint.com/:v:/r/personal/abhisheksinghpanesar_rocketmortgage_com/Documents/Recordings/Onboarding%20Program%20Intiation-20210614_161452-Meeting%20Recording.mp4?csf=1&web=1&e=WKeV2W"
    },
    {
      title: "Engineering Modernization",
      subtitle: "",
      slides_url: "https://rockfin-my.sharepoint.com/:p:/g/personal/abhisheksinghpanesar_rocketmortgage_com/EfjMQYrKjUxGnmjeMkPjVjQB-vevGdesftjp6lXcuNKsTA?e=zi24F8",
      event_url: "https://rockfin-my.sharepoint.com/:v:/r/personal/abhisheksinghpanesar_rocketmortgage_com/Documents/Recordings/EMS_%20Code%20Review%20Process%20Enhancements-20201125_110424-Meeting%20Recording.mp4?csf=1&web=1&e=vLZz2h"
    },
    {
      title: "Rocket CLI",
      subtitle: "",
      slides_url: "https://rockfin-my.sharepoint.com/:p:/g/personal/abhisheksinghpanesar_rocketmortgage_com/EdXg5zsm4RRFprQWBq75SbgBUXYk2aGOrX_jnhYzIWJ4WA?e=dOiWqQ",
      event_url: ""
    },
    {
      title: "HTTP Clients: Zero to Hero",
      subtitle: "",
      slides_url: "https://rockfin-my.sharepoint.com/:v:/g/personal/abhisheksinghpanesar_quickenloans_com/EXKlh7DIJUJCj6oduG0rKh4BPSFNj8ACsH1V14eLaEj-uw",
    },
    {
      title: "Deadlock in Transactional APIs",
      subtitle: "",
      slides_url: "https://rockfin-my.sharepoint.com/:p:/g/personal/abhisheksinghpanesar_rocketmortgage_com/Ea1i39Il3E1Jj5z6toUddc4BbpaxOAJKbmK78WfDlNh5Ww?e=R32Idi",
      event_url: "https://rockfin-my.sharepoint.com/:v:/g/personal/aaronrudzki_quickenloans_com/ESB_Lm4OR2xMm2nrTzA2z1IBkVFVZOeLhY8QxFEXQ3dhtw",
    },
    {
      title: "5 Whys Analysis",
      subtitle: "",
      slides_url: "https://rockfin-my.sharepoint.com/:p:/g/personal/abhisheksinghpanesar_rocketmortgage_com/EYhOdGhJo71AoHXm-udkQYQB71EZ6UiSA5RsCmh_7AjSHQ?e=AAvBj4",
      event_url: "https://rockfin-my.sharepoint.com/:v:/g/personal/aaronrudzki_quickenloans_com/ESB_Lm4OR2xMm2nrTzA2z1IBkVFVZOeLhY8QxFEXQ3dhtw",
    },
    {
      title: "Experience API",
      subtitle: "",
      slides_url: "https://rockfin-my.sharepoint.com/:p:/g/personal/abhisheksinghpanesar_rocketmortgage_com/EX4NXZgDhalIrVb0ila_CicB1OFNBmamGH4fOpFFdvpgqQ?e=Gk5sdF",
    },
    {
      title: "Code Sherpas",
      subtitle: "",
      slides_url: "https://rockfin-my.sharepoint.com/:p:/g/personal/abhisheksinghpanesar_rocketmortgage_com/EcvpA-fN-PRJrlhrgkD4LH4BUZRsjCfE1cHKnkF4dN2WOw?e=FlAjfW",
    },
    {
      title: "Git and Git CMD: Zero to Hero",
      subtitle: "",
      slides_url: "https://rockfin-my.sharepoint.com/:v:/g/personal/anjaliyadla_rocketmortgage_com/EaT7ix4G6FxEj1-30XqnCgoB_8885MkrDwIMyasExjT3XQ?e=hM5OPP",
    },
    {
      title: "CI/CD",
      subtitle: "",
      event_url: "https://rockfin-my.sharepoint.com/personal/abhisheksinghpanesar_quickenloans_com/Documents/Recordings/%5BDay%206%20Workshop%201%5D%20Terraform%20Basics-20210719_130247-Meeting%20Recording.mp4?csf=1&web=1&e=Yc92fg&cid=4d884f61-9b3a-44c7-9ea2-0e965c106238",
    },
    {
      title: "Unit testing in .NET",
      subtitle: "",
      slides_url: "https://rockfin-my.sharepoint.com/:v:/r/personal/matthewjoseph_rocketmortgage_com/Documents/Recordings/%5bDay%202%20-%20Workshop%201%5d%20Unit%20Testing%20Workshop-20210713_103248-Meeting%20Recording.mp4?csf=1&web=1&e=WVokgl",
      event_url: "https://rockfin-my.sharepoint.com/:v:/g/personal/shivasaipraneethchakinala_rocketmortgage_com/ESg3-HSZdX9CuDhCT5WdST0BJxlmvAMuQeGU6Xxh1YQJ7A?e=LGb09q",
    },
    {
      title: "Know your Tech",

      event_url: "https://rockfin-my.sharepoint.com/personal/carlosringer_rocketmortgage_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcarlosringer%5Frocketmortgage%5Fcom%2FDocuments%2FRecordings%2F%5BDay%2D1%20Workshop%202%5D%20%20Setup%20like%20a%20pro%2D20210712%5F171838%2DMeeting%20Recording%2Emp4&parent=%2Fpersonal%2Fcarlosringer%5Frocketmortgage%5Fcom%2FDocuments%2FRecordings",
    },
    {
      title: "Git Hooks",
      event_url: "https://rockfin-my.sharepoint.com/personal/abhisheksinghpanesar_rocketmortgage_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fabhisheksinghpanesar%5Frocketmortgage%5Fcom%2FDocuments%2FRecordings%2FMeeting%2D20210709%5F181612%2DMeeting%20Recording%2Emp4&parent=%2Fpersonal%2Fabhisheksinghpanesar%5Frocketmortgage%5Fcom%2FDocuments%2FRecordings",
    },
    {
      title: "Web API: Basics",
      subtitle: "",
      event_url: "https://rockfin-my.sharepoint.com/personal/shivasaipraneethchakinala_rocketmortgage_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fshivasaipraneethchakinala%5Frocketmortgage%5Fcom%2FDocuments%2FRecordings%2F%5BDay%202%20Workshop%204%5D%20Understand%20your%20Development%20Tools%2D20210713%5F140438%2DMeeting%20Recording%2Emp4&parent=%2Fpersonal%2Fshivasaipraneethchakinala%5Frocketmortgage%5Fcom%2FDocuments%2FRecordings",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const feedback = {
  title: "Technical Excellence",
  subtitle: "I do my best to push myself, and our train. I like being challenge with technical and process problems. Here's some feedback I have received from Leaders and other Senior Engineer's in my Drive reviews:",
  projects: [
    "Abhishek brings a wealth of experience and knowledge to the table, not only strengthening our release train's skill set, but also mentoring other engineers on the team. He has a strong voice in the leadership group, championing updating our processes to be more automated and more efficient. He does not allow cutting corners, so we don't introduce more tech debt into our system. He has a great attitude and is very personable.",
    "Abhishek has been a voice that I believe our engineering team has needed for quite some time. I honestly wish he was around during our initial rewrite of the application. I don't think I have seen another engineer come onto a team and take such initiative right away.",
    "His values and experience will carry across our train in a very positive way. I think any engineer who has the opportunity to work with him will benefit from this. I also think our leadership and platform as a whole should listen and learn to suggestions he may have as they are always forward thinking.",
    "Abhishek is a gifted engineer and he's at the top of his game.  He has entered the role of teacher to our less experienced engineers and it is showing all across the train.   Abhishek is our acting Staff Engineer and he has taken on that role so well that he will going up for AMAP to petition for the role permanently.",
    "Abhishek is one of the technical leaders for the train.  He is always looking for ways to make our tech better.  He stays abreast of new techniques and technologies to make sure we are engineering with an eye on the future.",
    "Abhishek is one the best engineers on our train.  He has built an onboarding program for new engineers that will get leveraged across the stream.  He has done excellent work for us and is always up for any challenge. He is a joy to work with and I learn something from him at every exchange.",
    "Abhishek is an asset to our team, and he brings us engineering firepower that we had not had before.   He operates above the level of senior software engineer at all times.   He is a mentor and thought leader. I would like to see Abhishek think more outside of the box regarding resource allocations for work. Abhishek should be proud of his efforts, and I look forward to seeing his contributions in the coming year.",
    "Abhishek took little time becoming a thought leader on our train. His impact on our younger engineers and their technical and interpersonal growth cannot be understated. In the few short months that he's been here he's taken the initiative and assumed the responsibility of a Senior Software Engineer from both a technical and a leadership standpoint.",
    "He poses a blend of technical mastery and leadership competency required to excel in the role.  Abhishek continuously looks to improve both himself and the team by investing time during and outside of work learning about new concepts and processes that might aid in that endeavor.  Abhishek goals and values reflect a thoughtful engineer looking for meaning in his work.  His approach with his peers and younger engineers alike allow him to explore those goals as he sees fit.  He would undoubtedly be successful at the next level if he choose to pursue it in the future.",
    "Over the last few months since Abhishek joined the team, he has presented ideas for improvement, not only on our team, but our entire stream and platform. He has also filled in as architect while ours is OOO and has don a great job digging in and understanding the process to provide tangible solutions.",
    "Abhishek has been a very good addition to RMS family. He has been driving RMS train towards a dream of complete CICD with initiatives like improvement of Quality process, involvement in enabling front-end unit testing, enforcing best practices during code reviews, logging standards in API's, providing feedback on processes (technical and non-technical) that RMS has been following to date, etc.",
  ],
  display: true // Set false to hide this section, defaults to true
};

const growthopportunity = {
  display: true,
  title: "My Growth Opportunities",
  subtitle: "I'm not perfect, and I believe in painting the whole picture. I prefer for my actions and output to speak for themselves. But despite all the good stuff presented above, I still recognize opportunities for improvement.",
  opportunities : [
    {
      heading: emoji("⚡ FOC Wide Participation - My current contributions are mainly focused on train level or stream level. I need to take my step forward and expand my contributions to the FOC level. I am planning to take participatation FOC wide groups and FOC wide activities like Tech Con etc. "),
      details: "",
    },
    {
      heading:  emoji("⚡ Capacity Boundaries - Sometimes I take too many responsibility beyond the limitation. This can create circumstances that might not allow me to invest the desired amount of time to interact with team members as I'd like. From past few months, I have been working on delegating work to other Engineers and Team Leaders. I still believe I need to grow in this area."),
      details: "",
    }
  ]
}

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "abhisheksinghpanesar@rocketmortgage.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  feedback,
  growthopportunity,
  podcastSection,
  contactInfo,
  twitterDetails
};
