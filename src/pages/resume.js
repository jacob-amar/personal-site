import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/resume.module.css"
import ResumePage from "../components/resume-page"
import ResumeSection from "../components/resume-section"

const IndexPage = () => (
  <Layout>
    <ResumePage>
      <h2 className={styles.header}>Jacob Amar</h2>
      <div className={styles.subheaderCnt}>
        <h5 className={styles.subheader}>Toronto, Ontario</h5>
        <h5 className={styles.subheader}>(416) 556-5583</h5>
        <h5 className={styles.subheader}>jacob.aa.amar@gmail.com</h5>
        <Link
          className={styles.subheader}
          to="https://www.linkedin.com/in/jacob-amar-249279180"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          className={styles.subheader}
          to="https://www.linkedin.com/in/jacob-amar-249279180"
          target="_blank"
        >
          Github
        </Link>
      </div>
      <ResumeSection>
        <h3 className={styles.header}>About Me</h3>
        <p className={styles.bodyText}>
          I’m a full stack web developer who has focused on executing projects
          in technology and education for start-up companies. For over 3 years,
          I have diligently applied my skills as a self-taught programmer, data
          analyst, and UX consultant—creating web apps and desktop tools that
          specialize in making learning more engaging and enjoyable.
        </p>
        <p className={styles.bodyText}>
          I’m an enthusiastic problem-solver who values honest communication and
          playful collaboration. After being self-employed for many years, I’m
          looking forward to contributing to the success of a high-growth team,
          while continuing to evolve my skills in a fast-paced industry setting.
        </p>
      </ResumeSection>
      <h3 className={styles.header}>Professional Experience</h3>
      <ResumeSection>
        <div className={styles.experienceHeaderCnt}>
          <h4 className={styles.experienceHeader}>Full Stack Web Developer</h4>
          <span>May 2019 - Present</span>
        </div>
        <div className={styles.experienceSubHeader}>
          Self Employed/Consulting Contracts
        </div>
        <p className={styles.bodyText}>
          Spearheaded 2 major projects, building client web apps from the ground
          up; predominantly using a React, Firebase, and NodeJS stack deployed
          continuously with Netlify & Github
        </p>
      </ResumeSection>
      <ResumeSection>
        <h4 className={styles.header}>Major Project: Preflop Mastery</h4>
        <h5 className={styles.subheader}>
          A comprehensive learning system for the fundamentals of Game-Theory
          Optimal Poker
        </h5>
        <ul className={styles.experienceList}>
          <li>
            Created advanced reference tool to enable the study of over 20,000
            scenarios (while saving 5+ clicks when compared to similar tools).
          </li>
          <li>
            Built fully responsively for desktop and mobile browsers using
            React, NodeJS, and Firebase Realtime Database.
          </li>
          <li>
            Rich assistance with skill progression through training repetition
            data-tracking.
          </li>
          <li>
            Applied expertise in React, Javascript, HTML/JSX, CSS, Node.js,
            Python, Firebase (Realtime Database and Authentication), Material
            UI.
          </li>
        </ul>
      </ResumeSection>
      <ResumeSection>
        <h4 className={styles.header}>Major Project: Knack of Writing</h4>
        <h5 className={styles.subheader}>
          An English language learning tool for refugees to Canada
        </h5>
        <ul className={styles.experienceList}>
          <li>
            Developed an interactive way to learn English-language basics
            through playful writing exercises and grammar puzzles
          </li>
          <li>
            Built a puzzle-creation tool for instructors to generate shareable
            content, which acts as a custom CMS.
          </li>
          <li>
            Created a web-based text editor with features supporting
            collaborative writing feedback.
          </li>
          <li>
            Applied expertise in React, NodeJS, and animations and
            responsiveness with CSS.
          </li>
        </ul>
      </ResumeSection>
    </ResumePage>
    <ResumePage>
      <ResumeSection>
        <div className={styles.experienceHeaderCnt}>
          <h4 className={styles.experienceHeader}>
            Data Analyst and Global Accountant
          </h4>
          <span>May 2017 - Apr 2019</span>
        </div>
        <div className={styles.experienceSubHeader}>
          Ikigai Academy of Poker Professionals
        </div>
        <ul className={styles.experienceList}>
          <li>
            Worked at an internationally competitive poker thinktank, where I
            was responsible for analyzing hand histories and developing
            strategies for achieving Game-Theory Optimal Poker.
          </li>
          <li>
            Managed the accounting process for more than 10 top poker players,
            which involved extensive cross-border transactions of funds.
          </li>
        </ul>
      </ResumeSection>
      <ResumeSection>
        <div className={styles.experienceHeaderCnt}>
          <h4 className={styles.experienceHeader}>Actuarial Analyst</h4>
          <span>May 2015 - April 2017</span>
        </div>
        <div className={styles.experienceSubHeader}>
          KPMG LLP Life & Pensions Actuarial Department
        </div>
        <ul className={styles.experienceList}>
          <li>
            Analyzed defined benefit and other financial statement disclosures
            as part of annual audits
          </li>
          <li>
            Compiled actuarial data for audit clients and validated key
            accounting assumptions
          </li>
          <li>
            Calculated benefit entitlements for retiring and terminating pension
            plan members
          </li>
        </ul>
      </ResumeSection>
      <ResumeSection>
        <div className={styles.experienceHeaderCnt}>
          <h4 className={styles.experienceHeader}>Data Analyst (Co-op)</h4>
          <span>May 2015 - August 2015</span>
        </div>
        <div className={styles.experienceSubHeader}>Destiny Solutions</div>
        <ul className={styles.experienceList}>
          <li>
            Worked independently using SQL on projects with both internal and
            marketing applications
          </li>
          <li>
            Produced prototypes of customer facing visualizations using Tableau
          </li>
          <li>
            Presented findings to company executives at high-profile meetings.
          </li>
        </ul>
      </ResumeSection>
      <ResumeSection>
        <h3 className={styles.header}>Education</h3>
        <p>
          <b>McMaster University (2012-2017):</b> Honours BSc, Actuarial and
          Financial Mathematics
        </p>
      </ResumeSection>
      <ResumeSection>
        <h3 className={styles.header}>Software Skills</h3>
        <ul className={styles.experienceList}>
          <li>
            <b>Web Development:</b> React, Javascript, Node.js, Firebase, CSS,
            HTML
          </li>
          <li>
            <b>Programming Languages:</b> Python, SQL, C# (Beginner)
          </li>
          <li>
            <b>Tools:</b> Microsoft Excel, Google Sheets
          </li>
        </ul>
      </ResumeSection>
      <ResumeSection>
        <p>
          <b>References available upon request</b>
        </p>
      </ResumeSection>
    </ResumePage>
  </Layout>
)

/*
 * Head export to define metadata for the page
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
