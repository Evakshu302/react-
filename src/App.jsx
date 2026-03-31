// src/App.jsx
import { useState } from 'react'
import './App.css'

// Extra component example
function Hello() {
  return <h2>Hello from Hello component!</h2>
}

function App() {
  // State example for counter
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Main heading */}
      <h1>My First React App</h1>

      {/* Extra component */}
      <Hello />

      {/* Counter button */}
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Small paragraph */}
      <p>Edit <code>src/App.jsx</code> and save to see hot reload in action!</p>
    </div>
  )
}

export default App