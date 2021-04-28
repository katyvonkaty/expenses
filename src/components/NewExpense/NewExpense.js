
import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false)
// use variables and updating function to control state

  const startedEditingHandler = () => {
    setIsEditing(true)
    console.log("clicked");
  }
  //sets is editing to true and triggered when the button in click and controls form showng up

  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  // set is editing to false and stop editing

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
    //closes form when adding a new item to the array
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startedEditingHandler}> Add New Expense </button>}
      // show button when not editing

      {isEditing &&
        <ExpenseForm
        onCancel = {stopEditingHandler}
        onSaveExpenseData={saveExpenseDataHandler} />}
        //show when button is clicked and editing is true

    </div>
  );
};

export default NewExpense;
