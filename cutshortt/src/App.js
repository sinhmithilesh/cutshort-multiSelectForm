import React, {useContext } from 'react'
import './app.css'
import First from './component/first/First'
import { Stepper, Step, StepLabel,} from '@mui/material'
import Second from './component/second/Second'
import Third from './component/third/Third.jsx'
import { context } from './component/context'
import edenlogo from "./component/edenLogo.png"
import Fourth from './component/fourth/Fourth'

export default function AppMultistepform() {

  const { currentStep, setCurrentStep, isSubmitted } = useContext(context)
 
  const showSteps = (step) => {
    switch (step) {
      case 1:
        return <First />
      case 2:
        return <Second />
      case 3:
        return <Third />
      case 4:
        return <Fourth />
      default:
        return <First />
    }
  }
  
  if (isSubmitted) {
    return (
      <div className="appContaier">
        <div className="success-msg">
          <h2>Submitted successfully</h2>
        </div>
      </div>
    )
  }


  /* All though I have used long manual method
     but to make it more efficient we can keep only single component and provide input fields through props.
     it will reduce code" */ 

  return (
    <div className="appContaier">
      <div className="header">
       <div className='head'>
        <span className='head-logo'>
          <img className='headLogo-img' src={edenlogo} alt=''/>
        </span>
        <h3 className='head-title'>Eden</h3>
       </div>
        <div className="create-stepper">
          <Stepper  activeStep={currentStep - 1}>
            <Step>
              <StepLabel
                onClick={() => {
                  setCurrentStep(1)
                }}
                style={{ cursor: 'pointer' }}
              ></StepLabel>
            </Step>
            <Step>
              <StepLabel
                onClick={() => {
                  setCurrentStep(2)
                }}
                style={{ cursor: 'pointer' }}
              ></StepLabel>
            </Step>
            <Step>
              <StepLabel
                onClick={() => {
                  setCurrentStep(3)
                }}
                style={{ cursor: 'pointer' }}
              ></StepLabel>
            </Step>
            <Step>
              <StepLabel
                onClick={() => {
                  // setCurrentStep(4)        //// user should not jump directly to last page
                }}
                style={{ cursor: 'pointer' }}
              ></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showSteps(currentStep)}
      </div>
    </div>
  )
}
