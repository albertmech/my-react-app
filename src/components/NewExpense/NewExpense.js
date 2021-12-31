import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpenseData(expenseData);
        setIsEditing(false);
    }

    const [isEnditing, setIsEditing] = useState(false);

    const setEnditingHandler = () => {
        setIsEditing(true);
    };

    const cancelEnditingHandler = () => {
        setIsEditing(false);
    };

    // if (!isEnditing) {
    //     return (
    //         <div className="new-expense">
    //             <button onClick={setEnditingHandler}>Add New Expense</button>
    //         </div>
    //     );

    // }
    // else {
    //     return (
    //         <div className="new-expense">
    //             <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelingEditing={cancelEnditingHandler} />
    //         </div>
    //     );
    // }

    return (
        <div className="new-expense">
            {
                !isEnditing && (
                    <button onClick={setEnditingHandler}>Add New Expense</button>
                )
            }
            {
                isEnditing && (
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelingEditing={cancelEnditingHandler} />
                )
            }
        </div>
    );
};

export default NewExpense;