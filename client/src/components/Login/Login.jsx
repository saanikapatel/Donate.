import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import Axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/auth/login", {
      email,
      password
    }).then(response => {
      if(response.data.status){
        navigate('/home');
      } 
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <div className='sign-up-container'>
      <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input type="email" placeholder='Email' autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder='******' onChange={(e) => setPassword(e.target.value)}/>

        <button className='btn' type='submit'>Login</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login;