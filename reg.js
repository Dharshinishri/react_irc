import React, {useState}from "react";
import "./loginform.css";

const Registration = () => {
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <div className = "cover">
            <h1>Registration</h1>
            Firstname<input type="text" placeholder="Firstname" />
            lastname<input type="text" placeholder="lastname" />
            Age<input type="text" placeholder="Age" />
            Email<input type="email" placeholder="Email" />

            <div className="login-btn" onClick={popup}>Register</div>
           
        <div className={popupStyle}>
            <h3>You have successfully registered!!!</h3>
            <p>Welcome back...! to our website</p>
        </div>
        </div>
    )
}
export default Registration;