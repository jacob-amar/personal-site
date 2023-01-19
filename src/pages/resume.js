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
      <ResumeSection>
        <h3 className={styles.header}>Professional Experience</h3>
        <div className={styles.experienceHeaderCnt}>
          <h4 className={styles.experienceHeader}>Full Stack Web Developer</h4>
          <span className={styles.bodyText}>May 2019 - Present</span>
        </div>
        <div className={styles.experienceSubHeader}>
          Self Employed/Consulting Contracts
        </div>
        <></>
        <p className={styles.bodyText}>
          Spearheaded 2 major projects, building client web apps from the ground
          up; predominantly using a React, Firebase, and NodeJS stack deployed
          continuously with Netlify & Github
        </p>
        <Link onClick={() => {}}>View Projects</Link>
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
