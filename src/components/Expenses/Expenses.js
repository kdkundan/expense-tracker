import React, { useState } from 'react'
import Card from "../UI/Card.js";
import ExpensesFilter from './ExpenseFilter.js';
import ExpensesChart from './ExpensesChart.js';
import ExpensesList from './ExpensesList.js';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        // console.log("Expenses >>>>>> " + filteredYear);
    }

    const filteredExpense = props.expense.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      } );

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                <ExpensesChart expenses={filteredExpense} /> 

                <ExpensesList expense={filteredExpense} />
            </Card>
        </>
    )
}

export default Expenses
