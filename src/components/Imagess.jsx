import React from 'react'




const Image = ({userRandom, colorRandom}) => {
  return (
    <div className='galery' style={{color: colorRandom}} >
        <div className="galery__img">
          <h1>Images</h1>
          <img src={userRandom.image} alt="#" />
        </div> 
      
    </div>
    
  )
}

export default Image