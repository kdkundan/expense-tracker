import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./ExpensesList.css"

const ExpensesList = (props) => {

    if(props.expense.length === 0){
        return <h2 className="expenses-list__fallback" >No Expenses Found</h2>
    }

    return (
        <>
            <ul className="expenses-list" >
                {
                    props.expense.map( exp => <ExpenseItem title={exp.title} date={exp.date} price={exp.amount} /> )
                }
            </ul>
        </>
    )
}

export default ExpensesList
