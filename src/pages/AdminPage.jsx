import React from 'react';
import { Container, Typography } from '@mui/material';

const AdminPage = () => (
  <Container>
    <Typography variant="h4">Admin Dashboard</Typography>
    <Typography variant="body1">
      This page is accessible only to admin users.
    </Typography>
  </Container>
);

export default AdminPage;