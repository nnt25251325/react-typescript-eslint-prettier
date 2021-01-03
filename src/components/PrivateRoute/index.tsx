import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const [authLoaded, setAuthLoaded] = useState<boolean>(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      doLogin();
    } else if (token) {
      setAuthLoaded(true);
    }
  }, [token]);

  const doLogin = async () => {
    try {
      const sleep = (ms: number) => new Promise(rs => setTimeout(rs, ms));
      await sleep(1000);

      localStorage.setItem('token', 'abc');
      setAuthLoaded(true);
    } catch (err) {}
  };

  return authLoaded ? (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  ) : (
    <div>Loading</div>
  );
};

export default PrivateRoute;
