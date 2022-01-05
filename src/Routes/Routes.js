import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import About from '../Pages/About';
import Home from '../Pages/Home';
import LayoutComponent from '../Layout/Layout';
// import MobileList from '../Pages/MobileList';
// import MobileForm from '../Pages/MobileForm';
import { UserAppProvider } from '../Context/UserAppContext';
// import SearchSection from '../Pages/SearchSection';

const Routes = () => {
  return (
    <>
      <Router>
        <UserAppProvider>
          <Switch>
            <Route path="/" exact>
              <LayoutComponent content={<Home />} />
              {/* <LayoutComponent /> */}
            </Route>
          </Switch>
        </UserAppProvider>
      </Router>
    </>
  );
};

export default Routes;
