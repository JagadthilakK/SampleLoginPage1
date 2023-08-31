import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/LoginPage.css' 

const LoginPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const Id = "Jagad"
  const Swal = require('sweetalert2')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name===Id){
      console.log("approved")
      navigate("/LogedInPage")
    }else{
      Swal.fire({
        title: 'Wrong!',
        text: 'Enter the correct name',
        imageUrl: require('../assests/fetchimage.jpg'),
        imageWidth: 200,
        imageHeight: 150,
      })
    }
  };

  return (
    <>
      <div className='main-container'>
        <div className="login-form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-keys">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="login-keys">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
