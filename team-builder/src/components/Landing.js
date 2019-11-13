import React from 'react';
import { Jumbotron } from 'reactstrap';

const Landing = () => {

    return(
        <Jumbotron>
            <h1 className='display-3'>Taylor's Team Builder</h1>
            <h3 className='display-5'>Welcome to my team builder, let's get started!</h3>
            {/* <Button color='primary' tag={Link} to='/form'>Create Member</Button>{' '} */}
        </ Jumbotron>
    )
}

export default Landing