import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { LandingPage } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
    </Routes>
  )
}

export default App