import { useState } from "react";
import { ConsoleChild } from "./ConsoleChild";

export const Console = (props) => {
  // const [countState, setCountState] = useState(0);
  // let count = 0;

  // const add = () => {
  //   count++;
  //   console.log(count);
  // };

  // const addState = () => {
  //   setCountState(countState + 1);
  // };

  // console.log("Console" + JSON.stringify(props.array));

  return (
    <>
      {/* <header className="App-header">
        <h1 className="mt-5">Test 2</h1>
        <hr />
        <div className="pt-3 pb-3">
          <p>Asta se modifica doar in consola: {count}</p>
          <button className="btn-primary btn" onClick={add}>
            Add
          </button>
        </div>

        <div className="pt-3 pb-3">
          <p>Asta se modifica din react dinamic: {countState}</p>
          <button className="btn-primary btn" onClick={addState}>
            Add with state React custom state 2
          </button>
        </div>
      </header> */}
      <h1>Console Component</h1>
      <ConsoleChild array2 = {props.array} />
    </>
  );
};
