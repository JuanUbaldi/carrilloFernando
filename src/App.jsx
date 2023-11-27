import { useState } from "react";
import reactLogo from "./assets/react.svg";
import DetailSeguros1 from "./components/DetailSeguros/DetailSeguros1";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DetailSeguros1 />
    </>
  );
}

export default App;
