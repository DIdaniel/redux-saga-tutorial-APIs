// https://www.youtube.com/watch?v=1EVwGxXU84w&t=8s
// https://www.youtube.com/watch?v=C9g-Zhsd_FE&list=PLbISvIqMwJh23r9Jv_rTYTJyIOBlO821N&index=2
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos />} />
          <Route path="/todo/:id" children={<Todo />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
