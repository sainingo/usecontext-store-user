import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const Home = () => {
    const msg = useContext(UserContext)
  return (
    <div>
        <h2>Home</h2>
        <p>{msg}</p>
    </div>
  )
}

export default Home