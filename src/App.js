import { useState } from 'react';
import './App.css';

import Login from './Components/Login/Login';
import Register from './Components/register/register';
// import Homepage from './homepage';
import Dataentry from './Components/Dataentry'
import Navbar from "./mainpage/Navbar/Navbar";
import Footer from "./mainpage/Footer/Footer";
import Home from './mainpage/Home/Home';
import Services from './mainpage/Services/Services'
import About from './mainpage/About/About'
import Contact from './mainpage/Contact/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"
import axios from 'axios';

function App() {

  const [user, setLoginUser] = useState({})

  //Getting Data from mongo-------------------------------
  // getData = ()=>{
  //   axios.get('/api')
  //   .then((response)=>{
  //     const data = response.data;
  //     console.log('data has been received')
  //   })
  //   .catch(()=>{
  //     alert('error retreiving data')
  //   })
  // }

  return (
    <>
      {/* <Homepage/> */}


      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Dataentry /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/main">
            <div className="App" >
              <Navbar />
              <Home />
              <Services />
              <About />
              <Contact />
              <Footer />
            </div>;
          </Route>

        </Switch>
      </Router>

    </>

  );
}

export default App;
