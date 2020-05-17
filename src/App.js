import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MicroFrontEnd } from './components'
import './App.css';

const {
  REACT_APP_LEAVE_HOST: leaveHost,
  REACT_APP_SPRINT_HOST: sprintHost,
} = process.env;


const Leave = ({ history }) => (
  <MicroFrontEnd history={history} host={leaveHost} name="Leave" />
);
const Sprint = ({ history }) => (
  <MicroFrontEnd history={history} host={sprintHost} name="Sprint" />
);

function App() {
  return (
    <BrowserRouter>
      <div className={'container-wrapper'}>
        {/* <AppHeader /> */}
        <Switch>
          <Route exact path="/" component={Leave} />
          <Route exact path="/restaurant/:id" component={Sprint} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
