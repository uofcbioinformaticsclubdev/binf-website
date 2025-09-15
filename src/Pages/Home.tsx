/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import './Home.css'

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bioinformatics Club</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

import BINFLogo from "../assets/BINF_Club_Logo.png"
import "../navbar.tsx"


export default function Home() {
  return (
    <main>
      <div>
        <img src={BINFLogo} className='Logo'></img>
      </div>
      <div>
        <h1 className='testStyle'><b>Who are we?</b></h1>
        <p className='testStyle'>Well... we just love biology and computer science, those are the best two things ever!
        </p>
        <p className='testStyle'>
          Still under construction!
        </p>
      </div>
    </main>
  )
};





