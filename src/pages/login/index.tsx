import React from 'react';
import { useHistory } from 'react-router-dom';

import { LoginPageProps } from './types';

const Login = (props: LoginPageProps) => {
  const history = useHistory();

  /**
   * Submit form
   */
  const onSubmit = (e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();

    try {
      const token: string = 'xyz';

      if (!token) {
        throw new Error();
      }

      history.push('/Home');
      localStorage.setItem('token', token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-login">
      <form onSubmit={onSubmit}>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
