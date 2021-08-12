import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from './state';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(ActionCreators, dispatch)

  const amount = useSelector((state: State) => state.bank)
  return (
    <main className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(200)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </main>
  );
}

export default App;
