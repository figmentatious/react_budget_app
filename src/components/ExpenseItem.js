import React, { useContext } from 'react';
import { FaMinusCircle, FaTrash } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td className='text-center'><FaPlusCircle className='text-success pointer' size='1.5em' onClick={event=> increaseAllocation(props.name)}></FaPlusCircle></td>
        <td className='text-center'><FaMinusCircle className='text-danger pointer' size='1.5em' onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle></td>
        <td className='text-center'><FaTrash className='text-primary pointer' size='1.5em' onClick={handleDeleteExpense}></FaTrash></td>
        </tr>
    );
};

export default ExpenseItem;