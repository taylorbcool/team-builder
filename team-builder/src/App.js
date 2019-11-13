import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Landing from './components/Landing';
import MemberForm from './components/MemberForm';
import TeamDisplay from './components/TeamDisplay';
import './App.css';
// import { Card } from 'reactstrap';
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
        <Landing />
        {/* <Route exact path='/' component={Landing} /> */}
        {/* <Route path='/form' component={MemberForm} /> */}
        <MemberForm addNewMember={addNewMember} />
        <TeamDisplay team={team} />
      </div>
    </Router>
  );
}

export default App;
