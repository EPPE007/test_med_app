import React, { useState } from 'react';
import "./Login.css";

function Login(props) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = (value) => {
        // Simple email regex for validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (value && !validateEmail(value)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    const handleSubmit = (e) => {
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            e.preventDefault();
        }
    };

    const handleReset = () => {
        setEmail("");
        setEmailError("");
    };

    return (
        <div className="container">
            {/* Div for login grid layout */}
            <div className="login-grid">
                {/* Div for login text */}
                <div className="login-text">
                    <h2>Login</h2>
                </div>
                {/* Additional login text with a link to Sign Up page */}
                <div className="login-text">
                    Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style={{ color: "#2190FF" }}> Sign Up Here</a></span>
                </div>
                <br />
                {/* Div for login form */}
                <div className="login-form">
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        {/* Form group for email input */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && (
                                <div style={{ color: "red", fontSize: "0.9rem" }}>{emailError}</div>
                            )}
                        </div>
                        {/* Form group for password input */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                        </div>
                        {/* Button group for login and reset buttons */}
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                        <br />
                        {/* Additional login text for 'Forgot Password' option */}
                        <div className="login-text">
                            Forgot Password?
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {};

export default Login;