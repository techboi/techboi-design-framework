import React from "react"

import SlideProps from './slide.props'
import slideStyle from './slide.module.css'

import VideoComp from "@/techboi-design-framework/components/video/video"

const Slide = (props: SlideProps) => {
  const { children, backgroundColor, backgroundVideoSrc, textColor, minHeight } = props

  return (
    <div className={slideStyle.wrapper} style={{ minHeight: minHeight }}>
      <div className={slideStyle.background}>
        <div className={`background-${backgroundColor}`} style={{ width: '100%', minHeight: '100%'}}>
          { backgroundVideoSrc &&
            <>
              <div style={{ opacity: 1.0 }}>
                <VideoComp src={backgroundVideoSrc} />
              </div>
              <div className={slideStyle.backgroundOverlay}></div>
            </>
          }
        </div>
      </div>

      <div className={slideStyle.body}>
        <div className={`color-${textColor}`}>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Slide