import "./App.css";
import { useState } from "react";

function App() {
  const [restaurentName, setResturentName] = useState("Lemon");

  function updateResturentName() {
    setResturentName("Little Lemon");
  }
  return (
    <div>
      <h1>{restaurentName}</h1>
      <button onClick={updateResturentName}>Update Resturent Name</button>
    </div>
  );
}

export default App;
