import React, { useState } from "react";
import {NavLink,withRouter} from 'react-router-dom'

function EditProfile(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [city, setCity] = useState("");
    const [dob, setDob] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }
    return (
        <div class="row">
            <form class="col s12" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="input-field col s6">
                        <label>
                            Name:
                        </label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Enter Your Name"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div class="input-field col s6">
                        <label>
                            Image:
                        </label>
                        <input 
                            type="file"
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <label>
                            Email Id:
                        </label>
                        <input
                            type="text"
                            value={email}
                            placeholder="Enter EmailId"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="input-field col s6">
                        <label>
                            Mobile No:
                        </label>
                        <input
                            type="text"  
                            value={mobile}
                            placeholder="Enter Your Mobile No"
                            onChange={e => setMobile(e.target.value)}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <label>
                            City:
                        </label>
                        <input
                            type="text"
                            value={city}
                            placeholder="Enter Your City"
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>
                    <div class="input-field col s6">
                        <label>
                            Password:
                        </label>
                        <input
                            type="password"  
                            value={dob}
                            placeholder="Enter Your Password"
                            onChange={e => setDob(e.target.value)}
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

export default withRouter(EditProfile)