import React, { useState } from "react";
import {NavLink,withRouter} from 'react-router-dom'

function NameForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Submitting email ${email}`)
    }
    return (
        <div class="row">
            <form class="col s12" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="input-field col s6">
                        <label>
                            Email Id:
                        </label>
                        <input
                            type="text"
                            value={email}
                            placeholder="Enter Your Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="input-field col s6">
                        <label>
                            Password:
                        </label>
                        <input
                            type="password"  
                            value={password}
                            placeholder="Enter Your Password"
                            onChange={e => setPassword(e.target.value)}
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