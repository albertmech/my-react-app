import Card from "../UI/Card";
import "./Expense.css"
import ExpenseDate from "./ExpenseDate";
const Expense = (props) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default Expense;