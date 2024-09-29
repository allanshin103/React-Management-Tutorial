import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer ={
  'name': 'Hongkildong',
  'birthday':'961222',
  'gender':'male',
  'job':'student'

}


class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      
      />
    );
  } 
}

export default App;
