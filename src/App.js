import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewMessage from './components/NewMessage'
import Login from './components/DeleteMessage'
import ShowMessage from './components/ShowMessage'
import './App.css';
import Dummy from './components/ShowMessage';

function App(props) {

  return (
    <Router>
        <Switch>
            <Route exact path='/' render = {(props) => {
                return (
                    <NewMessage />
                );
            }} />
            <Route exact path='/delete' render = {(props) => {
                return (
                    <Login />
                )
            }} />
            <Route exact path='/delete' render = {(props) => {
                return (
                    <Login />
                )
            }} />
            <Route path='/message' render = {(props) => {
                return (
                    <ShowMessage />
                )
            }} />
            <Route path='/dummy' render = {(props) => {
                return (
                    <Dummy />
                )
            }} />
        </Switch>
    </Router>
);
  
}

export default App;
