import { useState } from 'react'
import {Navigation} from './Navigation'

import About from "./Haqqında"
import Contacts from "./Əlaqə_məlumatları"
import Home from "./İş_nümunələri"
import './App.css'

function App() {
  
  
  return (
    <>
    
      <Navigation />
      <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/about' element={<About/>} /> 
                <Route path='/contacts' element={<Contacts/>} /> 
            </Routes>
    </>
  )
}

export default App
