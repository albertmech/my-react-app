import Expense from "./Expense";
import './ExpensesList.css'

const ExpensesList = props => {
    return (
        <ul className="expenses-list">
            {props.items
                    .map((item) => (
                        <Expense key={item.id} date={item.date} title={item.title} amount={item.amount} />
                    ))}
        </ul>
    );
};

export default ExpensesList;