import React from "react"

export default function Header(props) {
  return (
    <div>
      <h1>{props.headerText}</h1>
      <p>{props.phrase}</p>
    </div>
  )
}
