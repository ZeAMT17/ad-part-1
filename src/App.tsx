import { useState, useEffect } from "react";
export function App() {
  return <Show />;
}
function Show() {
  const [status, setStatus] = useState(true);
  const text = status ? "Se Vende" : "aprovecha la oportunidad";
  const style = {
    background: status ? "white" : "yellow",
    color: status ? "black" : "green",
    transition: "1s",
  };
  useEffect(() => {
    const interval = setInterval(
      () => setStatus((prevState) => !prevState),
      1000
    );
    return () => clearInterval(interval);
  }, []);
  return <h1 style={style}>{text}</h1>;
}
