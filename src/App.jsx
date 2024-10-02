import { useState } from 'react'

import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: 'aqua',}}>
      <h1>Parent Component</h1>
      <p>State at parent: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <ChildOne count={count} /> {/* This component will show the state*/}
        <ChildTwo count={count} setCount={setCount} /> {/*passing the state and setter function. This component will update the state*/}
      </div>
    </div>
  )
}

export default App
