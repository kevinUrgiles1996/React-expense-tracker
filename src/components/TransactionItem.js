import React, { useContext } from 'react';
import ExpenseContext from '../context/expenseContext';

const TransactionItem = ({ transaction }) => {
  const expenseContext = useContext(ExpenseContext);
  const { deleteIncome, deleteExpense } = expenseContext;
  const { name, amount } = transaction;
  const color = amount > 0 ? '#4CAF50' : '#F44336';

  const deleteTransaction = () => {
    if (amount > 0) deleteIncome(transaction);
    else deleteExpense(transaction);
  };

  return (
    <li
      class='collection-item'
      style={{
        borderColor: color,
        borderWidth: '2px',
        borderStyle: 'solid',
        margin: '5px',
        borderRadius: '5px'
      }}
    >
      <strong>{name}</strong>

      <span className='right'>
        <strong>${amount}</strong>
        <a style={myStyle} href='#' onClick={deleteTransaction}>
          X
        </a>
      </span>
    </li>
  );
};

const myStyle = {
  backgroundColor: 'white',
  borderRadius: '5px',
  color: 'red',
  padding: '5px 10px',
  marginLeft: '50px'
};

export default TransactionItem;
