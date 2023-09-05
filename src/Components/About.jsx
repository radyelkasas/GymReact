import React from 'react'
import aboutimage from '../images/about.png'

const About = () => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=".." />
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Incidunt nihil accusamus, modi numquam velit illum ad quidem,
                dolorum saepe blanditiis dolor voluptatum ut aliquid enim!
            </p>
            <button>READ NORE</button>
        </div>
    </div>
  )
}

export default About
