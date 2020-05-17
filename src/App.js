import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

const {
  REACT_APP_LEAVE_HOST: leaveHost,
  REACT_APP_SPRINT_HOST: sprintHost,
} = process.env;


const Leave = ({ history }) => (
  <MicroFrontend history={history} host={leaveHost} name="Leave" />
);
const Sprint = ({ history }) => (
  <MicroFrontend history={history} host={sprintHost} name="Sprint" />
);

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={Leave} />
          <Route exact path="/restaurant/:id" component={Sprint} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
