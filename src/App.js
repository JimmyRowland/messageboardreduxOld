import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageBoard from "./components/MessageBoard";
import {FlaggyFlag} from "./components/FlaggyFlag";
import {TopMenu} from "./components/TopMenu";
function App() {
  return (
      <div className="App">
        <TopMenu/>
        <FlaggyFlag />
        <MessageBoard/>
      </div>
  );
}

export default App;
