import * as React from "react"
import * as styles from "../components/resume.module.css"

const ResumeSection = ({ children }) => (
  <div className={styles.resumeSection}>{children}</div>
)

export default ResumeSection
