import React from 'react'
import '/App.css';
import Navbar from '../components/Navbar';
import CsvReader from '../components/CsvReader';
import Scheduling from '../pages/Scheduling';
import Requests from '../pages/Requests';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return <div className="App">
        <Router>
            <Navbar />
            <CsvReader />
            <Request />
            <Switch>
                <Route path="/" exact component={Scheduling} />
                <Route path="/appointment-requests" exact component={Requests} />
            </Switch>
        </Router>

    </div>;
}

export default App;