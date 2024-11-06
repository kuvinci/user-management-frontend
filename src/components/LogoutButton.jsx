import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {Button} from '@mui/material';

const LogoutButton = () => {
  const {logout} = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Button color="inherit" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;