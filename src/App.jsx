import { useState } from "react";
import reactLogo from "./assets/react.svg";
import DetailSeguros10 from "./components/DetailSeguros/DetailSeguros10";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DetailSeguros10 />
    </>
  );
}

export default App;
