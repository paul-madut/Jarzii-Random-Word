import { useState } from 'react'
import Button from './components/Button'
import DisplayWord from './components/DisplayWord'
import WordCount from './components/WordCount'


import './index.css'

function App() {
  const [currentWord, setCurrentWord] = useState("Hello")
  const [wordsGenerated, setWordsgenerated] = useState(1)

  return (
    <>
      <div>
       <h1>Jarzii's Word Generator</h1>
        <Button setCurrentWord={setCurrentWord} wordsGenerated={wordsGenerated} />
        <DisplayWord currentWord={currentWord} />
        <WordCount setWordsgenerated={setWordsgenerated}/>
      </div>
    </>
  )
}

export default App
