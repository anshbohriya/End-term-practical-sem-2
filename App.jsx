import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 className="title">Counter App</h1>

      <div className="display">
        <span className={`count ${count > 0 ? 'positive' : count < 0 ? 'negative' : ''}`}>
          {count}
        </span>
      </div>

      <div className="buttons">
        <button className="btn decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="btn reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default App