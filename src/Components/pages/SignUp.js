import React, { useState } from 'react';
import '../../App.css';
import './SignUp.css';
function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!username || !password) {
      alert('Please fill out all fields.');
      return;
    }

    // Handle login logic here (e.g., send request to server)
    console.log('Signing up with the username:', username, 'and password:', password);

    // Clear form fields after submission
    setUsername('');
    setPassword('');
    setLocation('');
  };

  return (
    <div className='login-container'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='username'
            id='username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location:</label>
          <input
            id='location'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          >
            {/* <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option> */}

            
          </input>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
