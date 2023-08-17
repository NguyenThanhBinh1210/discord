import './App.css'
// import Card from './components/Card'
import banner from '../src/assets/banner.svg'
import logo from '../src/assets/logo.svg'

function App() {
  return (
    <div className='screen-wrapper'>
      <img src={banner} alt='baner' />
      <div className='form-container'>
        <form action='submit' autoComplete='false' className='form-main'>
          <img src={logo} alt='logo' className='logo' />
          <h4>Welcome back!</h4>
          <p>We're so excited to see you again!</p>
          <div className='list-elm'>
            <div className='input-wrap'>
              <label htmlFor='username'>
                Email or Phone Number <span>*</span>
              </label>
              <input type='text' id='username' />
            </div>
            <div className='input-wrap'>
              <label htmlFor='password'>
                Password<span>*</span>
              </label>
              <input type='password' id='password' />
            </div>
            <a href='#'>Forgot your password?</a>
            <button>Log In</button>
            <div>
              <span>Need an account?</span>
              <span>Register</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
