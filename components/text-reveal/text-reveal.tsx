'use client'
import React, { useRef, useEffect } from "react"

import gsap from "gsap"
import { SplitText } from "gsap/dist/SplitText"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger, SplitText)

import compStyle from './text-reveal.module.css'

import TextRevealProps from './text-reveal.props'

const TextReveal = (props: TextRevealProps) => {
  const { children, colorTo, colorFrom } = props

  let elText = useRef<any>(null)

  /*
  useEffect(() => {
    const split = new SplitText(textElement.current, { type: "lines" });

    split.lines.forEach((target) => {
      gsap.to(target, {
        color: colorTo || '#000',
        // textDecoration: 'underline',
        ease: "none",
        scrollTrigger: {
          trigger: target,
          // markers: true,
          scrub: 0,
          start: "top 80%",
          end: "bottom center"
        }
      });
    });
  })
  */

  useEffect(() => {
    const split = new SplitText(elText.current, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    })

    gsap.from(split.lines, {
      /*
      scrollTrigger: {
        trigger: elText.current,
        toggleActions: "restart pause resume reverse",
        start: "top 50%",
      },
      delay: 0,
      duration: 0.42,
      ease: "circ.out", 
      opacity: 0, 
      stagger: 0.01,
      */
      duration: 8,
      opacity: 0,
      y: 30,
      ease: "power2",
      stagger: 0.2,
      scrollTrigger: {
        trigger: elText.current,
        // markers: true,
        start: "top 80%",
        end: "bottom center",
        scrub: 2
      }
    })
  })

  return (
    <div className={compStyle.text}>
      <div ref={(element) => { elText.current = element }}>
        { children }
      </div>
    </div>
  )
}

export default TextReveal