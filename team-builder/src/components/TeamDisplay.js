import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Card, Jumbotron } from 'reactstrap';

const TeamDisplay = props => {
    return (
        <Jumbotron className='container'>
            <h2 className='display-4'>Your Team</h2>
            {props.team.map(member => (
                <Card className='add-space'>
                    <div key={member.index}>
                        <h4 className='display-6'>{member.name}</h4>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                </Card>
            ))}
        </Jumbotron>
)
}

export default TeamDisplay