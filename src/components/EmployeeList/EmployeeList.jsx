import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import API from '../../utils/API';

class EmployeeList extends Component {
  state = {
    employees: [],
  };

  columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'username', headerName: 'Username', width: 160 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 235 },
    { field: 'age', headerName: 'Age' },
    { field: 'state', headerName: 'State' },
    { field: 'country', headerName: 'Country', width: 120 },
    { field: 'gender', headerName: 'Gender' },
  ];

  componentDidMount() {
    API.getUsers()
      .then((res) => {
        this.setState({
          employees: res.data.results.map((user, key) => ({
            firstName: user.name.first,
            lastName: user.name.last,
            username: user.login.username,
            age: user.dob.age,
            gender: user.gender,
            email: user.email,
            country: user.nat,
            state: user.location.state,
            id: key,
          })),
        });
      })
      .catch((err) => {
        err.message;
      });
  }

  render() {
    return (
      <>
        <DataGrid rows={this.state.employees} columns={this.columns} />
      </>
    );
  }
}

export default EmployeeList;
