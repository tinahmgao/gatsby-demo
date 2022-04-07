import React from "react"
import Navbar from "./Navbar"
import "../styles/style.scss"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 🔥 </p>
      </footer>
    </div>
  )
}
