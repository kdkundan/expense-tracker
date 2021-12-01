
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const Dummy_expense = [
  {
    id: "e1",
    title: "Bike Insurance",
    amount: 999,
    date: new Date(2020, 11, 0),
  },
  {
    id: "e2",
    title: "Jio Recharge",
    amount: 599,
    date: new Date(2021, 11, 0),
  },
  {
    id: "e3",
    title: "Gym Fee",
    amount: 1000,
    date: new Date(2021, 9, 0),
  },
  {
    id: "e4",
    title: "Food",
    amount: 400,
    date: new Date(2021, 10, 0),
  },
  {
    id: "e3",
    title: "Gym Fee",
    amount: 1000,
    date: new Date(2021, 8, 14),
  },
];

function App() {
  
  const [expense, setExpense] = useState(Dummy_expense);

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    setExpense( prevExpense => {
      return [expense, ...prevExpense];
    } ); 
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expense} />
    </>
  );
}

export default App;
