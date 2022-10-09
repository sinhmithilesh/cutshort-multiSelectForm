import React from 'react'
import './first.css'
import { TextField, InputLabel, Button } from '@mui/material'
import { context } from '../context'
import { useContext, useState } from 'react'
import { useEffect } from 'react'

export default function First() {
  
  const { setCurrentStep, userData, setUserData } = useContext(
    context,
  )
 
  // custom validation can be useful for long forms. Although we have only two fields to check 

  const [data, setData] = useState({
    fullName: '',
    displayName: '',
  }) 

  const [error, setError] = useState({
    fullName: '',
    displayName: '',
  })

  const [isValid, setIsValid] = useState(false)

  // careful while passing object as dependency, 

  useEffect(() => {
    checkValidityOfForm()
  }, [data, error])


  const handleChange = (event) => {
    let fieldName = event.target.name
    let fieldValue = event.target.value

    let newErrors = error

    switch (fieldName) {
      case 'fullName':
        if (!fieldValue) {
          newErrors.fullName = 'Required!'
        } else if (fieldValue.length < 5) {
          newErrors.fullName = 'Less than 5 not allowed!'
        } else {
          newErrors.fullName = ''
        }
        break
      case 'displayName':
        if (!fieldValue) {
          newErrors.displayName = 'Required!'
        } else if (fieldValue.length < 5) {
          newErrors.displayName = 'Less than 5 not allowed!'
        } else {
          newErrors.displayName = ''
        }
    }

    setData({
      ...data,
      [fieldName]: fieldValue,
    })

    setError({
      ...newErrors,
      // [fieldName]: fieldValue ? '' : "Required!"
    })
  }


  const checkValidityOfForm = () => {
    let isValid = false
    let requiredFields = ['fullName', 'displayName']

    isValid = requiredFields.every((field) => data[field])

    if (isValid) {
      isValid = requiredFields.every((field) => !error[field])
    }

    setIsValid(isValid)
  }

  const handleSubmit = (e) => {
    setUserData({
      ...userData,
      fullName: data.fullName,
      displayName: data.displayName,
    })
    setCurrentStep(2)
  }
  

  return (
    <div className="first">
      <div className="firstInput">
        <p className='info'>click above numbers to navigate</p>
        <h1 className="firstTittle">Welcome! First thing first...</h1>
        <p className="firstText">You can always change them later.</p>

        <InputLabel>Full Name</InputLabel>
        <TextField
          onChange={handleChange}
          name="fullName"
          value={data.fullName}
          placeholder="Enter your full name"
          variant="outlined"
          color="secondary"
          error={error.fullName}
          helperText={error.fullName}
        />


        <div style={{margin: "10px 0px"}}>  
        <InputLabel>Display Name</InputLabel>
        <TextField
          onChange={handleChange}
          name="displayName"
          value={data.displayName}
          placeholder="Enter Display Name"
          variant="outlined"
          color="secondary"
          error={error.displayName}
          helperText={error.displayName}
        />
        </div>

        <div className="first-btn">
          <Button
            className="createBtn"
            color="primary"
            onClick={handleSubmit}
            // onClick={() => setCurrentStep(2)}
            variant="contained"
            disabled={!isValid}
          >
            Create Workspace
          </Button>
        </div>
      </div>
    </div>
  )
}
