import React, { useState } from "react";
import {NavLink,withRouter} from 'react-router-dom'

function NameForm(props) {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassord, setConfirmPassword] = useState("");
    


    const handleSubmit = (evt) => {
        evt.preventDefault();
    }
    return (
        <div class="row">
            <form class="col s12" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="input-field col s6">
                        <label>
                            Current Password
                        </label>
                        <input
                            type="text"
                            value={password}
                            placeholder="Enter Your Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div class="input-field col s6">
                        <label>
                            New Password:
                        </label>
                        <input
                            type="password"  
                            value={newPassword}
                            placeholder="Enter  New Password"
                            onChange={e => setNewPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <label>
                            Confirm Password
                        </label>
                        <input
                            type="text"
                            value={confirmPassord}
                            placeholder="Please Confirm Password"
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <NavLink to="/profile">
                        <input type="submit" value="Submit" />
                    </NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default withRouter(NameForm)