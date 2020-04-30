import React, { Fragment } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Values from './components/Values';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import './App.css';

import ExpenseState from './context/ExpenseState';

function App() {
  return (
    <ExpenseState>
      <Fragment>
        <Header />
        <div className='container section'>
          <Balance />
          <Values />
          <TransactionList />
          <AddTransaction />
        </div>
      </Fragment>
    </ExpenseState>
  );
}

export default App;
