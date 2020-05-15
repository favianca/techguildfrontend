import React, { useState } from 'react';

import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="main-wrapper">
      <div className="login-wrapper">
        <h2>Log in</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert(`Username: ${username}\n Passowrd: ${password}`)
        }}>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Log in</button>
          <div className="form-footer">
            <div className="checkbox-wrapper">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="https://kargo.tech">Forgot Password?</a>
          </div>
        </form>
      </div>
      <div>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
};

export default App;
