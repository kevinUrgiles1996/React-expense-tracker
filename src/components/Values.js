import React, { useContext } from 'react';
import ExpenseContext from '../context/expenseContext';

const Values = () => {
  const expenseContext = useContext(ExpenseContext);
  const { income, expense } = expenseContext;
  return (
    <div className='row'>
      <div className='col l3 s6 offset-l3'>
        <div className='card horizontal '>
          <div className='card-stacked'>
            <div className='card-content text-center center-align green value'>
              <p>INCOME</p>
              <p>${income}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='col l3 s6'>
        <div className='card horizontal '>
          <div className='card-stacked'>
            <div className='card-content center-align red value'>
              <p>EXPENSE</p>
              <p>${expense}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
