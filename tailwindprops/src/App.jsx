import { useState } from "react";
import "./App.css";
import "./card"
import Card from "./card";

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    username: "hitesh",
    age: 21
  }

  return (
    <>
      <h1 className="bg-orange-500 text-white p-5 text-center font-bold">
        hii
      </h1>
      <Card channel="chai aur code" someobj={obj} />
      <Card />
    </>
  )
}

export default App;
