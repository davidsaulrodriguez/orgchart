import React from 'react';
import './App.css';
import { CssBaseline, Container } from '@material-ui/core';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Nav />
      <Container>
        <Home />
      </Container>
    </>
  );
};

export default App;
