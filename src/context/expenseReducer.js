import {
  ADD_TRANSACTION,
  ADD_INCOME,
  ADD_EXPENSE,
  DELETE_INCOME,
  DELETE_EXPENSE
} from './types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        balance: state.income + state.expense
      };
    case ADD_INCOME:
      return {
        ...state,
        income: state.income + action.payload
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expense: state.expense + action.payload
      };
    case DELETE_INCOME:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload.id
        ),
        income: state.income - action.payload.amount,
        balance: state.balance - action.payload.amount
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload.id
        ),
        expense: state.expense - action.payload.amount,
        balance: state.balance - action.payload.amount
      };
    default:
      return state;
  }
};
