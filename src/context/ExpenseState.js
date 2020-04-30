import React, { useReducer } from 'react';
import ExpenseContext from './expenseContext';
import ExpenseReducer from './expenseReducer';
import {
  ADD_TRANSACTION,
  ADD_INCOME,
  ADD_EXPENSE,
  DELETE_INCOME,
  DELETE_EXPENSE
} from './types';

const ExpenseState = props => {
  const initialState = {
    balance: 0,
    income: 0,
    expense: 0,
    transactions: []
  };
  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  const addTransaction = transaction => {
    const { amount } = transaction;

    amount > 0 ? addIncome(amount) : addExpense(amount);

    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    });
  };

  const addIncome = amount => dispatch({ type: ADD_INCOME, payload: amount });

  const addExpense = amount => dispatch({ type: ADD_EXPENSE, payload: amount });

  const deleteIncome = transaction =>
    dispatch({ type: DELETE_INCOME, payload: transaction });

  const deleteExpense = transaction =>
    dispatch({ type: DELETE_EXPENSE, payload: transaction });

  return (
    <ExpenseContext.Provider
      value={{
        balance: state.balance,
        income: state.income,
        expense: state.expense,
        transactions: state.transactions,
        addTransaction,
        deleteIncome,
        deleteExpense
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
