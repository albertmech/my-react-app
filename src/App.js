import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: '1',
      title: "book",
      amount: 10.99,
      date: new Date(2021, 11, 25),
    },
    {
      id: '2',
      title: "food",
      amount: 20.99,
      date: new Date(2021, 11, 26),
    },
  ]);

  const addExpenseDataHandler = (newExpenseData) => {
    console.log(newExpenseData);
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    })
  };

  return (
    <div>
      <NewExpense onAddExpenseData = {addExpenseDataHandler} />
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
