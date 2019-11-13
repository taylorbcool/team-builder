import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap';

const Landing = (props) => {

    return(
        <Jumbotron>
            <h1 className='display-3'>Taylor's Team Builder</h1>
            <h3 className='display-5'>Welcome to my team builder, let's get started!</h3>
            <Button color='primary' tag={Link} to='/form'>Create Member</Button>{' '}
            <Button outline color='primary' tag={Link} to='/team'>View Team</Button>
        </ Jumbotron>
    )
}

export default Landing