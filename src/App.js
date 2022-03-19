import { useState } from 'react';
import './App.css';

import Login from './Components/Login/Login';
import Register from './Components/register/register';
import Homepage from './homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"
function App() {

  const [user, setLoginUser] = useState({})

  return (
    <>
      {/* <Homepage/> */}


      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id?<Homepage/>:<Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>

    </>

  );
}

export default App;
