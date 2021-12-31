import "./ExpensesFilter.css"

const ExpensesFilter = (props) => {
    const onDropDownChangeHandler = (event) => {
        console.log(event.target.value);
        props.onFilterChange(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={onDropDownChangeHandler}>
                    {props.optionYears.map(year => <option key={year}>{year}</option>)}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;