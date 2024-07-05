import React, { useState } from 'react'
import './../Signup/Signup.css'
import { login } from '../../Api/auth';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      alert('Login successful');
      localStorage.setItem('token', response.token); // Store the token for authenticated requests
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div style={{ margin: '10px 0px' }}>Don't have an account? <Link to={'/sign-up'}>Signup</Link></div>
    </div>
  );
};

export default Login;
