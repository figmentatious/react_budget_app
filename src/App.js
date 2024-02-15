import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <div className='row top-row'>
                    <div className='col-auto'>
                        <h1 className='mt-3'>Budgettr</h1>
                    </div>
                    <div className='col-auto ml-auto mr-0'>
                        <Currency />
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <div className='container-fluid border rounded shadow-sm mt-3'>
                    <h3>Summary</h3>
                    <div className='row align-items-center py-3'>
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        <div className='col-auto'>
                            <div className='container-fluid h-100 fh-70'>
                                <div>-</div>
                            </div>
                        </div>
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                        <div className='col-auto'>
                            <div className='container-fluid h-100 fh-70'>
                                <div>=</div>
                            </div>
                        </div>
                        <div className='col-sm'>
                            <RemainingBudget />
                        </div>
                    </div>
                </div>
                <div className='container-fluid border rounded shadow-sm mt-3'>
                    <h3>Change allocation</h3>
                    <AllocationForm/>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;