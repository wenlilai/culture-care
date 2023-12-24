import React from 'react';

function Scheduling() {
    return <div>
        <h1>Schedule an Appointment</h1>
        <div className="Contact Info">
            <h2>Personal Information</h2>

            <form id="personal-info" method="POST">
                <label htmlFor="first-name">Legal First Name</label>
                <input name="first-name" placeholder="Enter first name..." type="text" />

                <label htmlFor="last-name">Legal Last Name</label>
                <input name="last-name" placeholder="Enter last name..." type="text" />

                <label htmlFor="pref-name">Preferred Name</label>
                <input name="pref-name" placeholder="Enter preferreed name..." type="text" />

                <label htmlFor="number">Phone Number</label>
                <input name="number" placeholder="XXX-XXX-XXXX" type="text" />

                <label htmlFor="address">Address</label>
                <input name="address" placeholder="Street Name" type="text" />

                <label htmlFor="city">City</label>
                <input name="city" placeholder="City" type="text" />

                <label htmlFor="state">State</label>
                <input name="state" placeholder="State" type="text" />

                <label htmlFor="zip">Zip Code</label>
                <input name="zip" placeholder="Zip code" type="number" />

                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email" />

                <label htmlFor="dob">Date of Birth</label>
                <input name="dob" placeholder="MM-DD-YYYY" type="text" />

                <label htmlFor="language">Preferred Language</label>
                <input name="language" placeholder="English or Spanish" type="text" />

                <button type="submit"> Confirm Information </button>
            </form>
        </div>
    </div>;
}

export default Scheduling;