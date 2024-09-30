import React from 'react';
import { Typography } from '@mui/material';

function Dashboard() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Your Dashboard
      </Typography>
      <Typography variant="body1">
        Here you can track your courses and progress.
      </Typography>
    </div>
  );
}

export default Dashboard;
