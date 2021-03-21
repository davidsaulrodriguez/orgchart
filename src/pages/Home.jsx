import React from 'react';
import { Typography, Link } from '@material-ui/core';
import EmployeeList from '../components/EmployeeList/EmployeeList';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h3' align='center' className={classes.textMargin}>
        Employee Listing
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        className={classes.textMargin}>
        Powered by{' '}
        <Link href='https://randomuser.me/' target='_blank' rel='noopener'>
          https://randomuser.me/
        </Link>
      </Typography>
      <div style={{ height: 500, width: '100%' }}>
        <EmployeeList />
      </div>
      <Typography
        variant='subtitle1'
        align='center'
        className={classes.textMargin}>
        <span role='img' aria-label='infomational tip icon'>
          ℹ️&nbsp;
        </span>
        You can sort and filter the users using the table headers!
      </Typography>
    </>
  );
};

export default Home;
