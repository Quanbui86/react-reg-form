import React from "react";
import { useState } from "react";
import './reset.css'
import './style.css'
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  
  const navigate = useNavigate();
  function fadeOut(e) {
    setTimeout(() => { navigate(e) }, 1000)
  }
  function handleLogin(event) {
    event.preventDefault();  
    //Khai báo biến, function - gán các biến vào các elements, value
    let welcome = document.querySelector("[id='noti4']")
    let loginSuccess = document.querySelector("[id='noti5']")
    let logName = document.querySelector("[name='logName']").value
    let logPass = document.querySelector("[name='logPass']").value
    let logSection = document.getElementById('logSection')  
    let auth = false;
    // Kiểm tra các biến với giá trị đã lưu trong localStorage
    // Kiểm tra logName có tồn tại trong localStorage không? => logPass có trùng với password ko?
    if (localStorage.getItem(logName)) {
      let password = JSON.parse(localStorage.getItem(logName)).password
      if (logPass === password) {
        auth = true;
      } else setIsPasswordAuth(false)
    } else alert('Username does not exist.')
    // Các điều kiện thõa mãn thì thông báo và chuyển trang
    if (auth) {
      setIsPasswordAuth(true)
      setNoti4(false)
      setNoti5(true)
      fadeOut('/react-reg-form')
    }
  }
  // Xử lí label khi focus và blur
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  // Quản lí thông báo bằng các trạng thái
  const [noti4, setNoti4] = useState(true);
  const [noti5, setNoti5] = useState(false);
  const [isUsernameAuth, setIsUsernameAuth] = useState(true);
  const [isPasswordAuth, setIsPasswordAuth] = useState(true);

  const handleUserLogin = (event) => {
    let value = event.target.value
    value?setIsUsernameFocused(true):setIsUsernameFocused(false);
    localStorage.getItem(value)?setIsUsernameAuth(true):setIsUsernameAuth(false);
  }
  return (
    
        <section id="logSection">
          <div className="container">
            <h1>Login Form</h1>
            <div className={`noti4 ${noti4?'':'invisible'}`}>
              <p name="welcome">“Please enter your username and password.”</p>
            </div>
            <div className={`noti5 ${noti5?'visible':''}`}>
              <p name="loginSuccess">
                “<strong className="success">Success!</strong>You will be redirected to the Home page shortly...”
              </p>
            </div>
            <form onSubmit={handleLogin} className="form">
              <div className="group">
                <div className={`errorMsgDiv ${isUsernameAuth?'':'visible'}`}><p className="text">*Invalid username *</p></div>
                <label className={`logName ${isUsernameFocused ? 'focus' : ''}`}><p className="labelText">Username</p></label>
                <input className="input" id="logName" type="text" placeholder="Username" name="logName"
                  onFocus={() => { setIsUsernameFocused(true) }} onBlur={handleUserLogin}
                />
              </div>
              <div className="group">
                <div className={`errorMsgDiv ${isPasswordAuth?'':'visible'}`}><p className="text">*Invalid password*</p></div>
                <label className={`logPass ${isPasswordFocused?'focus':''}`}><p className="labelText">Password</p></label>
                <input className="input" id="logPass" type="password" placeholder="Password" name="logPass"
                  onFocus={() => { setIsPasswordFocused(true) }} onBlur={(event) => {event.target.value?setIsPasswordFocused(true):setIsPasswordFocused(false) }} />
              </div>
              <div className="return-and-login">
                <Link type="button" to='/react-reg-form/register'>Registration</Link>
                <button type="submit" value="Login">Login</button>
              </div>
            </form>
          </div>
        </section>
  
  )
}