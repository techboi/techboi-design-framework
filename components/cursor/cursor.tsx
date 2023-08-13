'use client'
import React, { useEffect } from "react"
import gsap from "gsap"

import cursorStyle from './cursor.module.css'

const Cursor = () => {
  useEffect(() => {
    gsap.set(".cursor", {xPercent: -50, yPercent: -50});

    let xTo = gsap.quickTo(".cursor", "x", {duration: 1.2, ease: "power3"});
    let yTo = gsap.quickTo(".cursor", "y", {duration: 1.2, ease: "power3"});
  
    window.addEventListener("mousemove", e => {
      // xTo(e.pageX);
      // yTo(e.pageY);
      xTo(e.clientX);
      yTo(e.clientY);
    });
  })
  
  return (
    <div className={cursorStyle.wrapper}>
      <div className="cursor"></div>
    </div>
  )
}

export default Cursor