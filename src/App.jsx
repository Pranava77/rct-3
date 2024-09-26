import { useState } from 'react'
import './App.css'
import Card from './Card'



function App() {

  return (
    <>
     <div>
      <div className='bg-black w-full h-screen'>
        <div>
        <h1 className='text-white text-4xl font-bold text-center absolute  left-1/2 transform -translate-x-1/2 py-3 '>Component Reusability</h1>
          <Card/>
        </div>
      </div>
     </div>
    </>
  )
}

export default App

