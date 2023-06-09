import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './PAGES/HomePage/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<div>
        <p>404 Page Not Found</p>
      </div>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App