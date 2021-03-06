import ReactDOM from "react-dom";

import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";


//ReactDOMには関数が用意されている。第一引数の<App />は関数名をさし第二引数は、renderの箇所を設定する。
ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);