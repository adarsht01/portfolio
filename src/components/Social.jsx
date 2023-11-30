import React from 'react'
import {FiGithub,FiInstagram,FiLinkedin} from 'react-icons/fi'
const Social = () => {
  return (
    <div className='social'>
        <p>━━━━━━━━━━━━━━━━━━</p>
        
        <a className='link-logo' href='https://www.instagram.com/adarsht_01/?hl=en' target='blank'><FiInstagram/> </a>
        <a className='link-logo' href='https://www.linkedin.com/in/adarshthakur11/' target='blank'><FiLinkedin/></a>
        <a className='link-logo' href='https://github.com/adarsht01' target='blank'><FiGithub/></a>

    </div>
  )
}

export default Social