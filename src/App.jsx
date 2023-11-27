import { useState } from "react";
import reactLogo from "./assets/react.svg";
import DetailSeguros2 from "./components/DetailSeguros/DetailSeguros2";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DetailSeguros2 />
    </>
  );
}

export default App;
