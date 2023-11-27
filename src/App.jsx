import { useState } from "react";
import reactLogo from "./assets/react.svg";
import DetailSeguros13 from "./components/DetailSeguros/DetailSeguros13";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DetailSeguros13 />
    </>
  );
}

export default App;
