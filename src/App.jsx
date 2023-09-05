import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';
import PacmanLoader  from 'react-spinners/PacmanLoader'





const App = () => {
  const [loding , setloding] = useState(false);

  useEffect (()=> {
    setloding(true)
    setTimeout(() => {
      setloding(false)
    }, 3000);
  },[])
  return (
    <div>
      <div>
        {loding ?
          <div id='loding'>
            <PacmanLoader loding={loding} color="#FF1414" />
          </div>
        :
            <div>
              <Navbar />
              <Header />
              <Feature />
              <Offer />
              <About />
              <Contact />
            </div>
          
    }
      </div>
    </div>
  )
}

export default App
