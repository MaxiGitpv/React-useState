import React from 'react'

const Description = ({userRandom, colorRandom}) => {
  return (
    <div className='description' style={{color: colorRandom}} >
        <h2>Description</h2>
        <div>
        <p>{userRandom.description}</p>
        </div>
    </div>
    
  )
}

export default Description