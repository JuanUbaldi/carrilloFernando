import { useState } from "react";
import reactLogo from "./assets/react.svg";
import DetailSeguros5 from "./components/DetailSeguros/DetailSeguros5";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DetailSeguros5 />
    </>
  );
}

export default App;
