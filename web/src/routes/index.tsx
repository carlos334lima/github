import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import Repository from '../screens/Repositories';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  );
};

export default Routes;
