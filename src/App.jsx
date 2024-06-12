import React from 'react'

import './App.css'
import Home from './component/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Education from './component/Education'
function App() {


  return (
    <div>

     <BrowserRouter>
       <Routes>
           <Route path='/' element={ <Home/>}/>
           <Route path='/education' element={ <Education/>}/>
           
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
