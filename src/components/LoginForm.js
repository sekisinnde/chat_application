import * as  React from 'react';
import { useState } from 'react';
import axios from 'axios';

const projectID = '1fc4fe42-2e45-4f64-8d03-2f61f1ab1ba2';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
     // check if usernama/passsword => chatengine given values
    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      
      // works out logged in
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      
    // else error credentials
      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h2 className='error'>{error}</h2>
      </div>
    </div>

  );
};

export default LoginForm;