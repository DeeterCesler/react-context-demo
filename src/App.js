import logo from './logo.svg'
import './App.css'
import { createContext, useState } from 'react'
import Parent from './subcomponents/parent'

export const TestContext = createContext({})

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <h2>Context</h2>
      <TestContext.Provider value={{ toggle, setToggle }}>
        <Parent />
      </TestContext.Provider>
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
