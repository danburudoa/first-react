// importしている要素は、それがそのページの子コンポーネントを意味している。
//
import { useState, memo, useCallback } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { Child1 } from "./components/Child1";
import { Child4 }  from "./components/Child4";

export const App = memo(() => {
  console.log("再レンダリング");

  //stateの初期値を定義している。
  const [num, setNum] = useState(0);  

  // ボタンを押した時に、stateをカウントアップ。
  const onClickButton = () => {
    setNum(num + 1);
  }

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []); 

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});