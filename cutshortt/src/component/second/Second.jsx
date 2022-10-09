import React, { useContext, useState, useEffect } from 'react'
import { TextField, InputLabel, Button } from '@mui/material'
import { context } from '../context'
import './second.css'

export default function Second() {
  const { setCurrentStep, userData, setUserData } = useContext(
    context,
  )

  const [data, setData] = useState({
    workspaceName: '',
    workspaceURL: '',
  })

  const [error, setError] = useState({
    workspaceName: '',
    workspaceURL: '',
  })

  const [isValid, setIsValid] = useState(false)

  const handleChange = (event) => {
    let fieldName = event.target.name
    let fieldValue = event.target.value

    let newErrors = error

    switch (fieldName) {
      case 'workspaceName':
        if (!fieldValue) {
          newErrors.workspaceName = 'Required!'
        } else if (fieldValue.length < 5) {
          newErrors.workspaceName = 'Less than 5 not allowed!'
        } else {
          newErrors.workspaceName = ''
        }
        break
      case 'workspaceURL':
        if (!fieldValue) {
          newErrors.workspaceURL = 'Required!'
        } else if (!fieldValue.startsWith('www.eden.com')) {
          newErrors.workspaceURL = `it should start with 'www.eden.com'`
        } else {
          newErrors.workspaceURL = ''
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

  useEffect(() => {
    checkValidityOfForm()
  }, [data, error])

  const checkValidityOfForm = () => {
    let isValid = false
    let requiredFields = ['workspaceName', 'workspaceURL']

    isValid = requiredFields.every((field) => data[field])

    if (isValid) {
      isValid = requiredFields.every((field) => !error[field])
    }

    setIsValid(isValid)
  }

  const handleSubmit = (e) => {
    setUserData({
      ...userData,
      workspaceName: data.workspaceName,
      workspaceURL: data.workspaceURL,
    })
    setCurrentStep(3)
  }
  

  return (
    <div className="second">
      <div className="secondInput">
        <h1 className="secondTitle">Let's set up home for your work</h1>
        <p className="secondText">
          You can always create another workspace later.
        </p>
        <div>
          <InputLabel>Workspace Name</InputLabel>
          <TextField
            className="error"
            onChange={handleChange}
            name="workspaceName"
            value={data.workspaceName}
            placeholder="Enter workspace name"
            variant="outlined"
            color="secondary"
            error={error.workspaceName}
            helperText={error.workspaceName}
          />
        </div>

        <div style={{margin: "10px 0px"}}>
          <InputLabel>Workspace URL</InputLabel>
          <TextField
            onChange={handleChange}
            name="workspaceURL"
            value={data.workspaceURL}
            placeholder="Enter workspace URL"
            variant="outlined"
            color="secondary"
            error={error.workspaceURL}
            helperText={error.workspaceURL}
          />
        </div>
      </div>

      <div className="second-btn">
        <Button
          className="second-createBtn"
          color="primary"
          onClick={handleSubmit}
          variant="contained"
          disabled={!isValid}
        >
          Create Workspace
        </Button>
      </div>
      
    </div>
  )
}
