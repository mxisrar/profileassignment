import React, { useState } from "react";
import {NavLink,withRouter} from 'react-router-dom'

function Profile(props) {
    return (
        <div class="row">
                <div class="input-field col s6">
                <NavLink to='/editProfile' class="waves-effect waves-light btn-large">Edit Profile</NavLink>
                <NavLink to='/changePassword' class="waves-effect waves-light btn-large">changePassword</NavLink>
                </div>
        </div>
    );
}

export default withRouter(Profile)