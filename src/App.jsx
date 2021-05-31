import React from "react";

const App = () => {
  const onClickButton = () => {
    return alert();
  };
  const contentStyle = {
    color: "blue",
    textSize: "16px"
  };
  return (
    <>
      <h1 style={{ color: "green" }}>こんにちは</h1>
      <p style={contentStyle}>reactです</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
