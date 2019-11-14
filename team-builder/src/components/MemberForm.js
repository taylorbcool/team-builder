import React, {useState} from 'react';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const MemberForm = props => {
    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChanges = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(teamMember)
    }

    return(
        <Card className='container add-space'>
            <h2 className='display-4'>Add New Team Member</h2>
            <Form className='form' onSubmit={submitForm}>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input
                        id='name'
                        type='text'
                        name='name'
                        onChange={handleChanges}
                        value={teamMember.name}
                    />
                    <Label for='email'>Email</Label>
                    <Input
                        id='email'
                        type='text'
                        name='email'
                        onChange={handleChanges}
                        value={teamMember.email}
                    />
                    <Label for='role'>Role</Label>
                    <Input
                        id='role'
                        type='text'
                        name='role'
                        onChange={handleChanges}
                        value={teamMember.role}
                    />
                </FormGroup>
                <Button color='primary' type='submit'>Submit</Button>
            </Form>
        </Card>
    )
}

export default MemberForm