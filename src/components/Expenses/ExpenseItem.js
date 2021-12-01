import React from "react";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, price, date } = props;
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">Rs.{price}</div>
        </div>
        
      </Card>
    </>
  );
};

export default ExpenseItem;
