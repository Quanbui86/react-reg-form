import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './reset.css'
import './style.css'
export default function RegisterForm(){
    const navigate = useNavigate();
    // pattern để kiểm tra name và password
    let patternUserName = /(^[a-zA-Z0-9]{4,20}$)/;
    let patternName = /^[a-zA-Z\x20]{4,20}$/;
    let patternPass = /^.{4,16}$/
    let check = false;
    function fadeOut(e){
        setTimeout(()=>{navigate("/react-reg-form/login")}, 1000)
    }
    function regHandle(event){    
        // Ngăn trang không load lại khi submit form
        event.preventDefault();
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const name = document.getElementById('name').value
        const birth = document.getElementById('birth').value
        if ((localStorage.getItem(username) === null) && patternUserName.test(username)){
            setNoti1(true); setNoti2(false); setNoti3(false)
            if (patternPass.test(password) && patternName.test(name) && birth){
                check = true;
            } else alert("Create a password, name at least 4 characters.")
        } else {
            // Thông báo lỗi
            setNoti1(false); setNoti2(true); setNoti3(false)
        }
        // Sau khi check xong, thực hiện:
        // Lưu thông tin vào localStorage
        // Thông báo thành công
        // Chuyển trang sau 1s
        if (check === true){
            let userInfo = {
                username: username,
                password: password,
                name: name,
                birth: birth
            }
            setNoti1(false); setNoti2(false); setNoti3(true)
            localStorage.setItem(username, JSON.stringify(userInfo))
            fadeOut() 
            // Lệnh chuyển trang 
        }
    }
    // Xử lí label khi focus và blur
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isBirthFocused, setIsBirthFocused] = useState(false);
    // Quản lí thông báo bằng các trạng thái
    const [noti1, setNoti1] = useState(true);
    const [noti2, setNoti2] = useState(false);
    const [noti3, setNoti3] = useState(false);
    const [isUsernameRight, setIsUsernameRight] = useState(true);
    const [isPasswordRight, setIsPasswordRight] = useState(true);
    const [isNameRight, setIsNameRight] = useState(true);

    const handleUsername = (e) => {
        let value = e.target.value
        value?setIsUsernameFocused(true):setIsUsernameFocused(false)
        patternUserName.test(value)?setIsUsernameRight(true):setIsUsernameRight(false)
    }
    const handlePassword = (e) => {
        let value = e.target.value
        value?setIsPasswordFocused(true):setIsPasswordFocused(false)
        patternPass.test(value)?setIsPasswordRight(true):setIsPasswordRight(false)
    }
    const handleName = (e) => {
        let value = e.target.value
        value?setIsNameFocused(true):setIsNameFocused(false)
        patternName.test(value)?setIsNameRight(true):setIsNameRight(false) 
    }
    return (
        
                <section id="regSection">
                    <div className="container">
                        <h1>Register form</h1>
                        <div id="noti1" className={`noti1 ${noti1?'visible':'invisible'}`}>
                            <p id="instruction">
                                Both the username and password must contain a minimum of 4 characters.
                            </p>
                        </div>
                        <div id="noti2" className={`noti2 ${noti2?'visible':'invisible'}`}>
                            <p id="regUnSuccessMes">"<strong className="error">Error! </strong>&nbsp;Username exits or wrong username"</p>
                        </div>
                        <div id="noti3" className={`noti3 ${noti3?'visible':'invisible'}`}>
                            <p id="regSuccessMes">“<strong className="success">Success!</strong>&nbsp;You will be redirected to the login page shortly...”                    </p>
                        </div>
                        <form className="form" onSubmit={regHandle}>
                            <div className="group">
                                <div className={`errorMsgDiv ${isUsernameRight?'':'visible'}`}><p className="text">*Username 4-20 characters</p></div>
                                <label htmlFor="username" className={`username ${isUsernameFocused ? 'focus' : ''}`}><p className="labelText">Username</p></label>
                                <input className="input" id="username" type="text" placeholder="Username" name="Username"
                                    onFocus={()=>{setIsUsernameFocused(true)}} onBlur={handleUsername}
                                />
                            </div>
                            <div className="group">
                                <div className={`errorMsgDiv ${isPasswordRight?'':'visible'}`} ><p className="text">*Password 4-20 characters</p></div>
                                <label  className={`password ${isPasswordFocused ? 'focus' : ''}`}><p className="labelText">Password</p></label>
                                <input className="input" id="password" type="password" placeholder="Password" name="Password"
                                    onFocus={()=>{setIsPasswordFocused(true)}} onBlur={handlePassword}
                                />
                            </div>
                            <div className="group">
                                <div className={`errorMsgDiv ${isNameRight?'':'visible'}`}><p className="text">*Name (a-z)(A-Z)(4-20 characters)</p></div>
                                <label  className={`name ${isNameFocused ? 'focus' : ''}`}><p className="labelText">Your Name</p></label>
                                <input className="input" id="name" type="text" placeholder="Your Name" name="Your Name"
                                    onFocus={()=>{setIsNameFocused(true)}} onBlur={handleName}
                                />
                            </div>
                            <div className="group">
                                <div className="errorMsgDiv"><p className="text">Insert Your Birthday*</p></div>
                                <label className={`birth ${isBirthFocused ? 'focus' : ''}`}><p className="labelText">Birthday</p></label>
                                <input className="input" id="birth" type="date" placeholder="Birthday" name="Birthday"
                                    onFocus={()=>{setIsBirthFocused(true)}} onBlur={(e)=>{e.target.value?setIsBirthFocused(true):setIsBirthFocused(false)}}/>
                            </div>
                            <div className="return-and-login">
                                <Link to='/react-reg-form/login' className="link">Login</Link>
                                <button type="submit" value="Submit">Register</button>
                                <Link to='/react-reg-form' className="link">Home</Link>
                            </div>
                        </form>
                            
                        </div>
                </section>
           
    )
}