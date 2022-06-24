import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EmailWhiteList = () => {
    const [email, setEmail] = useState();
    const [message, setMesssage] = useState();
    const [error, setError] = useState(false);

    const clear = () => {
        setEmail('')
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('>>>>here>>>>>>>>>>>>')

        const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        if(data && data.status === 200) {
            setMesssage('Success')
        } else {
            setError(true);
            setMesssage('Error')
        }
        console.log(data, '>>>>>>>>>>>>>>>>')
        clear();
    }
    return (
        <div>
            <Form onSubmit={ handleSubmit }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {message? message : '' }
        </div>
    )
};

export default EmailWhiteList;