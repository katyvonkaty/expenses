import React from "react";
import ExpenseForm from "./ExpenseForm"


const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
    console.log(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
      {/*/value for this prop should be a function that is
        triggered when someone changes in the expenseform
       can be called from therecomponent*/}
    </div>
  )
}

export default NewExpense
