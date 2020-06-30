import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import Welcome from './components/Auth/Welcome'



function App() 
{
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={SignUp}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/welcome' component={Welcome}/>


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
