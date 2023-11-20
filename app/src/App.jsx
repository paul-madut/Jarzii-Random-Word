import { useState } from 'react'
import Button from './components/Button'
import DisplayWord from './components/DisplayWord'


import './index.css'

function App() {
  const [currentWord, setCurrentWord] = useState("Hello")
  return (
    <>
      <div className='h-screen w-full bg-blue-500'>
        <h1 className=' text-xl text-gray-950'>Text</h1>
        <p>Helloo</p>
        <Button setCurrentWord={setCurrentWord} />
        <DisplayWord currentWord={currentWord} />
      </div>
    </>
  )
}

export default App
