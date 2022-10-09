import React, { useState } from 'react'

export const context = React.createContext()

const StepContext = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState([])
  const [finalData, setFinalData] = useState([])
  const [isSubmitted, SetIsSubmitted] = useState(false)

  function submitData() {}

  return (
    <div>
      <context.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          isSubmitted,
          SetIsSubmitted,
        }}
      >
        {children}
      </context.Provider>
    </div>
  )
}

export default StepContext
