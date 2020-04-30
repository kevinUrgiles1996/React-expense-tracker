import React, { useContext } from 'react';
import ExpenseContext from '../context/expenseContext';

const Balance = () => {
  const expenseContext = useContext(ExpenseContext);
  const { balance } = expenseContext;

  return (
    <div className='row'>
      <div className='col l6 offset-l3 s12'>
        <h4>Your Balance</h4>
        <h5>${balance}</h5>
      </div>
    </div>
  );
};

export default Balance;
