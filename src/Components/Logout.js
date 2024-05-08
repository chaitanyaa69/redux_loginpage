import React, { useState } from 'react';
import "./Logout.css";
import { useDispatch, useSelector } from 'react-redux';
//import UsernameChanged from './UserChanged';
import { logout, selectUser, changeUsername } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Logout = () => {
  const [newName, setNewName] = useState(''); // State for new username
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const handleUsernameChange = (e) => {
      e.preventDefault();
      dispatch(changeUsername(newName));
      
      setNewName(''); // clears input fiels
      
      navigate('/UsernameChanged'); //redirects to the success page
  };

  return (
    <div className="logout">
      <h1>Welcome <span className="user__name">{user.name}</span></h1>
      <button className="logout__button" onClick={handleLogout}> Logout </button>
      <form className="logout__form" onSubmit={handleUsernameChange}>
        <h1>Update Username</h1>
        <input
          type="text"
          placeholder="New Username"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button className="submit__btn" type="submit" >Change Username</button>
      </form>
    </div>
  );
};

export default Logout;
