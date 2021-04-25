import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"

const EXPENSES = [
  { title: "car insurance", amount: 294.76, date: new Date(2021, 2, 28) },
  { title: "toilet paper", amount: 294.76, date: new Date(2021, 5, 28) },
  { title: "vanilla", amount: 294.76, date: new Date(2021, 7, 28) },
  { title: "ice cream", amount: 294.76, date: new Date(2021, 10, 28) },
];

function App() {

  const [expenses, setExpenses] = useState(EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses( (prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <h2> Ayo for yayo </h2>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
