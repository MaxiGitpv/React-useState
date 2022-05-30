import React from 'react'

const Card = ({userRandom, colorRandom, clickButton}) => {
  
  
  const styleButton = {
    backgroundColor: colorRandom
  }

  return (
    <article className='article' style={{color: colorRandom}}>
        <h2 className='article__title'>{userRandom.name}</h2>
        <p>{userRandom.address.city}</p>
        <ul className='article__list'>
          <li>
            <b className='article__b'>Company name: </b>
            {userRandom.company.name}
          </li>
          <li>
            <b className='article__b'>City: </b>
            {userRandom.address.city}
          </li>
          <li>
            <b className='article__b'>Website: </b>
            {userRandom.website}
          </li>
        </ul>
        <button 
          style={styleButton}
          className='article__btn'
          onClick={clickButton}
          >&#62;
        </button>
    </article>
    
  )
}

export default Card