import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (eventKey) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: eventKey,
        });
    };

    const currencyString = () => {
        switch (currency) {
            case "$": return "Dollar";
            case "£": return "Pound";
            case "€": return "Euro";
            case "₹": return "Ruppee";
        }
    }

    return (
        <Dropdown onSelect={handleCurrencyChange}> 
            <Dropdown.Toggle variant="success">Currency ({currency} {currencyString(currency)})</Dropdown.Toggle> 
            <Dropdown.Menu> 
                <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item> 
                <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item> 
                <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item> 
                <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item> 
            </Dropdown.Menu> 
        </Dropdown>
    );
}

export default Currency;