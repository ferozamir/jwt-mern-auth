import React, { useState } from 'react'
import './Signup.css'
import { signup } from '../../Api/auth';
import { Link } from 'react-router-dom';



const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(username, email, password);
            alert(response.message)
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <div className='container'>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Signup</button>
            </form>
            <div style={{ marginTop: '10px' }}>Already have an account? <Link to={'/'}>Login</Link></div>
        </div>
    );
};

export default Signup;
