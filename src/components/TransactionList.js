import React, { Fragment, useContext } from 'react';
import ExpenseContext from '../context/expenseContext';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const expenseContext = useContext(ExpenseContext);
  const { transactions } = expenseContext;
  return (
    <Fragment>
      <div className='row'>
        <div className='col l6 s12 offset-l3'>
          <h5>History</h5>
          <ul className='collection'>
            {transactions.map(transaction => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default TransactionList;
