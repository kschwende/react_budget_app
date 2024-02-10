import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Use a constant for the maximum budget value
const MAX_BUDGET = 20000;

const Budget = () => {
    const { Budget, expenses, Currency, dispatch } = useContext(AppContext);

    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => total + item.allocatedBudget, 0);
        val = parseInt(val);

        if (val > MAX_BUDGET) {
            alert(`The value cannot be more than ${MAX_BUDGET}`);
            return;
        }

        if (val <= totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
            return;
        }

        dispatch({
            type: 'CHG_BUDGET',
            payload: val,
        });
    }

    return (
        <div className='alert alert-secondary' style={{ display: 'flex', flexDirection: 'row' }}>
            <span>Budget: &nbsp;{Currency} </span>
            <input
                required
                type='number'
                id='budget'
                value={Budget}
                style={{ size: 10 }}
                step='10'
                max={MAX_BUDGET}
                onChange={event => changeBudget(event.target.value)}
            />
        </div>
    );
};

export default Budget;
