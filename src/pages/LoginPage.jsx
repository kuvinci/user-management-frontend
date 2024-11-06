import React, {useState, useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {TextField, Button, Container} from '@mui/material';

const LoginPage = () => {
  const {login} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({email: '', password: ''});

  const handleSubmit = async (e) => {
    console.log(credentials);
    e.preventDefault();
    try {
      await login(credentials);
      // Redirect or show success message
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={credentials.email}
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;