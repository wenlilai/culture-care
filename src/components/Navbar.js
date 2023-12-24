import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <h2>Culture Care</h2>
            </div>
            <div className="right">
                <Link to="/"> Home/Scheduling </Link>
                <Link to="/appointment-requests"> Appointment Requests </Link>
            </div>
        </div>
    )
}