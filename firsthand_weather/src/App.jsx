import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './SearchBar'
//Port: http://localhost:5177/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*<div className= "App">
      <div className= "search-bar-container">
        <SearchBar/>
        <div>SearchResults</div>
      </div>
    </div>
    */}

    {/*Title and headers*/}
      <h1>Firsthand Weather</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello big world
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

  //https://www.youtube.com/watch?v=sWVgMcz8Q44    Search bar
export default App
