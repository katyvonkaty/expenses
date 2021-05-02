import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  {/* importing a function called usestate, provided by react library, allows us to define values as state, where changes to the values should reflect*/}

  const [title, setTitle] = useState(props.title);

  const onClickHandler = () => {
    setTitle("updated")
    console.log("clicked");
  }

  // setTimeout(() => {
  //   console.log("hi katie");
  //   setTitle("katie!")
  // }, 3000)
  {/*/setting state with a timer function*/}

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
      {/*//adding event listener*/}
      {/*/evaluated when click occurs*/}
    </Card>
  );
}

export default ExpenseItem;
