import React, { useState, useContext } from 'react';
import ExpenseContext from '../context/expenseContext';

import M from 'materialize-css/dist/js/materialize.min.js';
import uuid from 'uuid';

const AddTransaction = () => {
  const expenseContext = useContext(ExpenseContext);

  const { addTransaction } = expenseContext;

  const [name, setName] = useState('');
  const [amount, setAmout] = useState(0);
  const id = uuid();

  const onNameChange = e => setName(e.target.value);
  const onAmountChange = e => setAmout(+e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || amount === 0) {
      M.toast({ html: 'Please enter the full info!' });
    } else {
      const transaction = {
        id,
        name,
        amount
      };
      addTransaction(transaction);
      setName('');
      setAmout(0);
      e.target.reset();
    }
  };
  return (
    <div className='row '>
      <div className='col l6 s12 offset-l3'>
        <h5>Add Transaction</h5>
        <hr />
        <form onSubmit={onSubmit}>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                placeholder='Transaction Name'
                type='text'
                className='validate'
                onChange={onNameChange}
              />
            </div>
            <div className='input-field col s6'>
              <input
                placeholder='Amount'
                type='number'
                step='0.01'
                className='validate'
                onChange={onAmountChange}
              />
            </div>
            <div className='col'>
              <button
                className='btn waves-effect waves-light purple darken-3'
                type='submit'
                name='action'
              >
                Add Transaction
                <i className='material-icons right'>send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
