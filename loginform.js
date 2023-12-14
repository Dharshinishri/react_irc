import React, {useState}from "react";
import "./loginform.css";

const LoginForm = () => {
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <div className = "cover">
            <h1>Login</h1>
            Username<input type="text" placeholder="username" />
            Password<input type="password" placeholder="password" />
            Confirm Password<input type="password" placeholder="confirm password" />

            <div className="login-btn" onClick={popup}><center>Login</center></div>
           
        <div className={popupStyle}>
            <h3>Login Successfull</h3>
            <p>Welcome...! to our website</p>
        </div>

        </div>
    )
}
export default LoginForm;