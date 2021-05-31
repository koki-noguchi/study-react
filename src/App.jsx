import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "green" }}>こんにちは</h1>
      <ColorfulMessage color="blue">reactです</ColorfulMessage>
      <ColorfulMessage color="grey">react勉強中です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
