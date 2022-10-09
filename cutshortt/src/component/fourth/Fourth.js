import React, { useContext } from 'react'
import './fourth.css'
import { Typography, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { context } from '../context'

export default function Fourth() {
  const { userData } = useContext(context)

  // console.log(userData)

  return (
    <div className="first">
      <div className="firstInput">
       
        <Box sx={{ textAlign: 'center' }} className="innerStepContainer">
          <CheckCircle />
          <h1 className="tittle">Congratulation's {userData.fullName ? userData.fullName : "guest"}</h1>
          <Typography sx={{ mb: 3 }} color={'rgba(128, 128, 128, 1)'}>
            You have completed onboarding, you can start using the Eden.
          </Typography>
          <button className="fourth-createBtn">Launch Eden</button>
        </Box>

      </div>
    </div>
  )
}
