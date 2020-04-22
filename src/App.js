import React from 'react';
import './App.css';
import Login from './component/login'
import EditProfile from './component/EditProfile'
import Profile from './component/profile'
import Password from './component/password'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path='/' component={Login} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/editProfile' component={EditProfile} />
    <Route exact path='/changePassword' component={Password} />
    </div>
    </BrowserRouter>
  );
}

export default App;
