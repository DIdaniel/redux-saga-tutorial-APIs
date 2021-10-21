import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App2 from "./App2";
// import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
