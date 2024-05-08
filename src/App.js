import React from 'react';
import Login from './Components/Login'; // Import Login component
import Logout from './Components/Logout'; // Import Logout component
import './App.css';

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice'; // Import user selector

// Import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom';
//import UsernameChanged from './Components/UserChanged';

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      {/* Wrap your application with BrowserRouter */}
      <BrowserRouter>
        {/* Conditionally render Login or Logout based on user state */}
        {user ? <Logout/> : <Login />}
      </BrowserRouter>
    </div>
  );
};

export default App;
