import * as React from "react"

const ResumePage = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      padding: `var(--space-2) var(--size-gutter)`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      backgroundColor: `var(--resume-page-color)`,
      width: `var(--size-content)`,
      height: `${(11 / 8.5) * 54}rem`,
    }}
  >
    {children}
  </div>
)

export default ResumePage
