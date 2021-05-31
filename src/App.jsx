/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [showFaceFlag, setFaceFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwichShowFlag = () => {
    setFaceFlag(!showFaceFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFaceFlag || setFaceFlag(true);
      } else {
        showFaceFlag && setFaceFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "green" }}>こんにちは</h1>
      <ColorfulMessage color="blue">reactです</ColorfulMessage>
      <ColorfulMessage color="grey">react勉強中です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <br></br>
      {showFaceFlag && <p>^ ^</p>}
    </>
  );
};

export default App;
