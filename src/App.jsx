import { useState } from 'react'
import './App.scss'

import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
