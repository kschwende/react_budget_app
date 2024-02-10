import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { Currency, dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });
  };

  const currencies = [
    { symbol: "$", name: "Dollar" },
    { symbol: "£", name: "Pound" },
    { symbol: "€", name: "Euro" },
    { symbol: "₹", name: "Ruppee" },
  ];

  return (
    <div className="alert alert-secondary" id='CurrencyDropdown'>
      Currency: 
      <select 
        name="currency" 
        id="currency" 
        value={Currency}
        onChange={event => changeCurrency(event.target.value)}
        className="dropdown"
      >
        {currencies.map((currency, index) => (
          <option 
            key={index} 
            className="dropdown-options" 
            value={currency.symbol}
          >
            {currency.symbol} {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currency;