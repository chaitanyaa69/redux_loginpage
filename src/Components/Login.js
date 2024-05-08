import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import "./Login.css"

const Login = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errorMessage, setErrorMessage] = useState(""); 

    const dispatch = useDispatch();

    const handleSubmit= (e) =>{
        e.preventDefault();
        let isValid = true;
        setErrorMessage('');

        if (name.trim() === '') {
            isValid = false;
        setErrorMessage('Please enter your name.');
        } else if (email.trim() === '') {
            isValid = false;
        setErrorMessage('Please enter your mail address.');
        } else if (password.trim() === '') {
            isValid = false;
        setErrorMessage('Please enter your password.');
    }

        if(isValid){
            dispatch(
                login({ 
                name : name,
                email : email,
                password : password,
             }));
        }
        
    };
    return (
        <div className="login">
          <form className="login__form" onSubmit={handleSubmit}>
            <h1>Login Here</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submit__btn">
              Submit
            </button>
          </form>
        </div>
      );
}

export default Login;
