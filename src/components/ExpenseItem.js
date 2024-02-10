import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import { MdDoNotDisturbOn } from 'react-icons/md';

const ExpenseItem = ({ name, budget }) => {
    const { dispatch, Currency } = useContext(AppContext);

    const handleAction = (type, quantity = 0) => {
        dispatch({
            type,
            payload: {
                name,
                quantity,
            },
        });
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{Currency}{parseInt(budget)}</td>
            <td>
                <FaPlusCircle 
                    size='2.2em' 
                    color="green" 
                    onClick={() => handleAction('ADD_QUANTITY', 10)}
                />
            </td>
            <td>
                <MdDoNotDisturbOn 
                    size='2.2em' 
                    color="red" 
                    onClick={() => handleAction('RED_QUANTITY', 10)}
                />
            </td>
            <td>
                <FaTimesCircle 
                    size='2.2em' 
                    color="black" 
                    onClick={() => handleAction('DELETE_ITEM')}
                />
            </td>
        </tr>
    );
};

export default ExpenseItem;