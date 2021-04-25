import React from "react";
import ExpenseForm from "./ExpenseForm"
import ExpensesFilter from "../Expenses/ExpensesFilter"

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    console.log(expenseData);
  }

  return (
    <div className="new-expense">
    <ExpensesFilter />
      <ExpenseForm onSaveExpenseData= {saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
