import { useState } from "react";
import Card from "../UI/Card";
import Expense from "./Expense";
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    //console.log(props.items);

    const [selectedYear, setSelecteYear] = useState('All');

    const filterChangeHandler = (selectedYear) => {
        setSelecteYear(selectedYear);
    };

    const filteredExpenses = selectedYear == 'All' ? props.items : props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
      });

    console.log(props.items);
    const optionYears = ["All", ...new Set(props.items.map(item => item.date.getFullYear().toString()))];
    console.log(optionYears);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={selectedYear} optionYears={optionYears} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;