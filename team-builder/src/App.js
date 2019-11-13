import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing';
import MemberForm from './components/MemberForm';
import Team from './components/Team';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [team, setTeam] = useState([
    {
      name: 'Taylor',
      email: 'taycool@gmail.com',
      role: 'Developer'
    }
  ])

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember])
  }

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Landing} />
        <Route path='/form' component={MemberForm} />
        <Route path='/team' component={Team} />
      </div>
    </Router>
  );
}

export default App;
