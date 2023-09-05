import React from 'react'
import Featurebox from './Featurebox'
import image1 from '../images/1.svg'
import image2 from '../images/2.svg'
import image3 from '../images/3.svg'
import image4 from '../images/4.svg'


const Feature = () => {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox iamge={image1} title="WeightLifting" />
            <Featurebox iamge={image2} title="Specific Muscle" />
            <Featurebox iamge={image3} title="Flex Your Muscle" />
            <Featurebox iamge={image4} title="Cardio Exercise" />
        </div>
    </div>
  )
}

export default Feature
