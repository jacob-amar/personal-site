import * as React from "react"
import * as styles from "../components/resume.module.css"

const ResumePage = ({ children }) => (
  <div className={styles.resumePage}>{children}</div>
)

export default ResumePage
