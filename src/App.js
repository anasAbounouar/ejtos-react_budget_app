import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under

import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    <div className='d-flex flex-row justify-content-between'>
                        <Budget />    

                 <Remaining/>       

                        <ExpenseTotal />
                    </div>    

                       <ExpenseList/>    

{/*     <ExpenseItem/> */}

                      <AllocationForm/>   

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
