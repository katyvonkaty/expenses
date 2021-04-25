import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <>
      <Card className="expense-item">

        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title}</h2>
          <div className="expense-item__price"> ${props.amount} </div>
        </div>
        <button> Change Title </button>
      </Card>
    </>
  );
}

export default ExpenseItem;