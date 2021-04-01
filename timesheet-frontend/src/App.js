import logo from './logo.svg';
import './App.css';
import {
BrowserRouter, Switch, Route
}from 'react-router-dom'
import Timesheets from "./components/Timesheets/Timesheets"
import TimesheetEdit from './components/Timesheets/TImesheetEdit';

function App() {
  return (
    <BrowserRouter>
<div className="App">
<Switch>

  <Route exact path="/timesheets/create">
    <h1>Create Timesheet</h1>
  </Route>

  <Route exact path="/timesheets/edit/:id">
    <TimesheetEdit />
  </Route>

  <Route exact path="/">
    <h1>Timesheet HomePage</h1>
    <Timesheets />
  </Route>

</Switch>
</div>
    </BrowserRouter>
  );
}

export default App;
