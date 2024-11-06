import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Typography variant="h4">Welcome, {user.name}!</Typography>
      <Typography variant="subtitle1">Role: {user.role}</Typography>

      {user.role === 'admin' ? (
        <Typography variant="body1">You have admin privileges.</Typography>
      ) : (
        <Typography variant="body1">You are a regular user.</Typography>
      )}
    </Container>
  );
};

export default Dashboard;