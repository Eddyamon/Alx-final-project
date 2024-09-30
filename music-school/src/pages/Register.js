import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration form submitted');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <TextField label="Name" variant="outlined" fullWidth margin="normal" required />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" required />
      <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" required />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </Box>
  );
}

export default Register;
