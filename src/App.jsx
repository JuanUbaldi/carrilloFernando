import { useState } from "react";
import reactLogo from "./assets/react.svg";
import DetailSeguros8 from "./components/DetailSeguros/DetailSeguros8";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DetailSeguros8 />
    </>
  );
}

export default App;
