import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
 import SignUp from'./Pages/SignUp';

function App() {
  return (
    <div className="App"> 
    <Router> 

          <Routes> 

          {/* <Route path="/" element={<LoginPage/>} />  */}
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={ <Login/>} /> 
          <Route path="/signup" element={ <SignUp/>} /> 
              {/* <Route path = "/dashboard" element={<Dashboard/>}/>  */}
          </Routes> 

    </Router> 
    </div> 
  );
}

export default App;
