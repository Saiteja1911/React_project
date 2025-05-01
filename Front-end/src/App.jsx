import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// https://vitejs.dev/guide/features.html#jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
    </>
  );
}


export default App
