import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const About = () => {
    const text = useContext(UserContext)
  return (
    <div>
        <h1>About</h1>
        <h4>{text}</h4>
    </div>
  )
}

export default About