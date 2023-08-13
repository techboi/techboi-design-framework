import React from "react";
import Link from "next/link";

import CallToActionProps from "./call-to-action.props";

const CallToAction = (props: CallToActionProps) => {
  const { size } = props
  
  return (
    <Link href="/beratung" className={`button ${size === 'small' ? 'button-small' : ''}`}>Kostenloses Beratungsgespräch vereinbaren</Link>
  )
}

export default CallToAction