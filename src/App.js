import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { SupervisorUpsert } from "./components/SupervisorUpsert";
import { SupervisorList } from "./components/SupervisorList";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/create-supervisor">
          <SupervisorUpsert />
        </Route>

        <Route path="/list-supervisor">
          <SupervisorList />
        </Route>

        <Route exact path="/">
          <SupervisorList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
