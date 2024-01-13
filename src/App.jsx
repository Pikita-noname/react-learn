import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Blabla";
import Blabla from "./components/Blabla";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  setInterval(()=> {setTime(new Date())},1000);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{time.toLocaleTimeString()}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count +1)}>
          Мистер программистер! {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
