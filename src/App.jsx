import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    return alert();
  };

  return (
    <>
      <h1 style={{ color: "green" }}>こんにちは</h1>
      <ColorfulMessage color="blue">reactです</ColorfulMessage>
      <ColorfulMessage color="grey">react勉強中です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
