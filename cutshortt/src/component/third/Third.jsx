import React, { useContext, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { Person, PeopleAlt } from '@mui/icons-material'
import { context} from '../context'
import './third.css'


export default function Third() {
  const { 
     userData,
     setUserData,  
     setCurrentStep } = useContext(context)

  const [data, setData] = useState({typeOfWork : 'personal'})
  const [selected, setSelected] = useState(null)

  const handleSubmit = (e) => {
    setUserData({
      ...userData,
      typeOfWork : data
    })
   
    if(Object.keys(userData).length >=5){
      console.log(Object.keys(userData).length)
      setCurrentStep(4)
    }
    else{
      alert("All the previous and current fields are needed")
    }
  }


  return (
    <div className="third">
      <div className="thirdInput">
        <h1 className="thirdTitle">Let's set up a home for all your work</h1>
        <p className="thirdText">
          You can always create another workspace later.
        </p>
       
       
        <Box className="setupTabWrapper">
          <div 
             id="1"
             name="personal"
             className= {selected === 'personal' ? "setupTab activeBox" : "setupTab"}
             onClick={(e)=>{
              setSelected("personal")
              setData("personal")
            }}
            >
            <Person />
            <Typography variant="h6">For myself</Typography>
            <Typography>
              Write better. Think more clearly. Stay organised.
            </Typography>
          </div>

          <div 
            id='2'
            name="team"
            className= {selected === 'team' ? "setupTab activeBox" : "setupTab"}
            onClick={(e)=>{
              setSelected("team")
              setData("team")
            }}
            >
            <PeopleAlt />
            <Typography variant="h6">With my team</Typography>
            <Typography>
              Wikis, docs, tasks & projects, all in one place.
            </Typography>
          </div>
        </Box>
      </div>
    
      <div className="third-btn">
        <button className="third-createBtn" 
         onClick={handleSubmit}
        >
          Create Workspace
        </button>
      </div>

    </div>
  )
}
