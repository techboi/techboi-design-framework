import React from "react"

import videoStyle from './video.module.css'
import VideoCompProps from "./video.props"

const VideoComp = (props: VideoCompProps) => {
  const { src } = props

  return (
    <div className={videoStyle.wrapper}>
      <video autoPlay loop muted playsInline>
        <source src={`${src}.mp4`} type="video/mp4" />
        <source src={`${src}.ogg`} type="video/ogg" />
        <source src={`${src}.webm`} type="video/webm" />
      </video>
    </div>
  )
}

export default VideoComp