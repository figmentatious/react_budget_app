import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <div className='container-fluid border rounded p-2 shadow-sm'>
            <h3>Expenses</h3>
            <table className='table table-striped'>
                <thead className="thead-light">
                <tr>
                <th scope="col">Department</th>
                <th scope="col">Allocated Budget</th>
                <th scope="col" className='text-center'>Increase by 10</th>
                <th scope="col" className='text-center'>Decrease by 10</th>
                <th scope="col" className='text-center'>Delete</th>
                </tr>
            </thead>
                <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;