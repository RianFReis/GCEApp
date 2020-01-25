import React from 'react';
import {useSelector} from 'react-redux';
import Public from './public';
import Private from './private';

const JwtSelector = state => state.login.data && state.login.data.jwt;

export default function Router() {
  const LoggedIn = true;
  return LoggedIn ? <Private /> : <Public />;
}
