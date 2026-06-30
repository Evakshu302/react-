import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(0)
  const [num, setNum] = useState(100)
  useEffect(function () {
    console.log("the tab is running alongside")
  }, [])// ager yaha dependency mai yr num likh denga toh fir bhai usper he depend karega yr yai useeffect
  return (
    <div>
      <h1>{first}</h1>
      <h2>{num}</h2>
      <button
        onClick={() => {
          setfirst(first + 1)
        }}
        onDoubleClick={() => {
          setNum(num + 10)
        }}>Click Me</button>
    </div>
  )
}

export default App