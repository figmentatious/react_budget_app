import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        if (event.target.value > 20000)
        {
            alert(`Budget cannot exceed ${currency}20,000`)
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (expenses.length > 0 && event.target.value < totalExpenses )
        {
            alert(`Budget must greater than than current expenses: ${currency}${totalExpenses}`)
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    };
    
    return (
        <div className='fh-70 m-0 p-2 alert alert-secondary shadow-sm'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;