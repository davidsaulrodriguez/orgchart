import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='relative' className={classes.appbar}>
        <Toolbar>
          <Typography variant='h4'>OrgChart</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
