import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useSelector } from 'react-redux'; // Access updated user from Redux
import { selectUser } from '../features/userSlice'; // Import user selector
//import Logout from './Logout';

const UsernameChanged = () => {
  const user = useSelector(selectUser);

  return (
    <div className="username__changed">
      <h1>Your username has been updated to: {user.name}</h1>
      <Link to="/Logout">Go Back to Logout</Link>
    </div>
  );
};

export default UsernameChanged;
