'use client'
import React, { useState } from 'react';
import { Button,Paper, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { addUser } from '@/app/redux/slice';
import {useDispatch} from 'react-redux'

export default function AddUsers() {

  const [name, setName]=useState("");
  const dispatch=useDispatch();


  const userDispatch=()=>{
    // console.log(name)
    dispatch(addUser(name))
  }
  return (
    <Paper className='p-4 m-4 border flex flex-col'>
      <h1 className="font-bold text-xl">Users Add</h1>
      <TextField label="Enter Name" variant="outlined" margin="normal" onChange={(e)=>setName(e.target.value)}/>
      <Button onClick={userDispatch} className='bg-slate-800' variant="contained" color="primary">
        Add Users
      </Button>
    </Paper>
  );
}
