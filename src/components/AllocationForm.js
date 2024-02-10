import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { Currency, Budget, expenses, dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if(/^[0-9\b]+$/.test(quantity)) {
            const totalExpenses = expenses.reduce((total, item) => total + item.allocatedBudget, 0);
            const remaining = parseInt(Budget) - totalExpenses;

            if(quantity <= remaining) {
                const item = {
                    name: name,
                    quantity: parseInt(quantity),
                };
        
                dispatch({
                    type: action === "Reduce" ? 'RED_QUANTITY' : 'ADD_QUANTITY',
                    payload: item,
                });
            } else {
                alert(`The value cannot exceed remaining funds ${Currency}${remaining}!`);
            }
        } else {
            alert('The field accepts only numeric values!');
        }
    };

    return (
        <div className='row'>
            <div className='col-sm'>
                <div className="input-group-text">
                    <label htmlFor="Department">Department: &nbsp;</label>
                    <select className="custom-select" id="Department" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales">Sales</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="IT">IT</option>
                    </select>
                </div>
            </div>
            <div className='col-sm'>
                <div className="input-group-text">
                    <label htmlFor="Allocation">Allocation: &nbsp;</label>
                    <select className="custom-select" id="Allocation" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>
                </div>
            </div>
            <div className='col-sm'>
                <div className="input-group-text">
                    <label htmlFor="Amount">{Currency}: &nbsp;</label>
                    <input
                        required
                        type='number'
                        id='Amount'
                        min='0'
                        value={quantity}
                        style={{size: 10}}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;