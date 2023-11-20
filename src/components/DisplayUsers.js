'use client'
import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';



const DisplayUsers = () => {

  return (
    <Paper className='p-4 m-4 border'>
      <Typography variant="h4" gutterBottom>
        Users List
      </Typography>
      <Paper elevation={3}>
        <List>

        </List>
      </Paper>
    </Paper>
  );
};

export default DisplayUsers;
