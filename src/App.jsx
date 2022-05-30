import { useState } from 'react'
import './App.css' 
import users from './json/users.json'
import Card from './components/Card'
import Imagess from './components/Imagess'
import Description from './components/Description'


//    ARREGLO
const arrayColor = [

  '#287678', '#7F7268', '#C59466', '#E266AE',
  '#CC4C03','#95D66D','#0A9E17','#838E0A'
]

// //    ARREGLO
// const arrayImage = [

//   'https://picsum.photos/50/50?random=1',
//   '#https://picsum.photos/50/50?random=2', 
//   'https://picsum.photos/50/50?random=3', 
//   '#https://picsum.photos/50/50?random=4'
// ]

function App() {
  
  const createNumberRandom = array => {
  return Math.floor(Math.random() * array.length)
}

const getElementRandom = array => {
  const i = createNumberRandom(array)
  return array[i]
}


    //  ESTADO  -   FUNCION 
 const [userRandom, setUserRandom] = useState(getElementRandom(users))
 const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColor))
//  const [imageRandom, setImageRandom] = useState(getElementRandom(arrayImage))

 const clickButton = () => {
  setUserRandom(getElementRandom(users))
  setColorRandom(getElementRandom(arrayColor))
}



const appStyle = {
backgroundColor: colorRandom
}

  return (
    <div style={appStyle} className="App">
      <Card 
      userRandom={userRandom}
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
      <Imagess 
        userRandom={userRandom}
        colorRandom={colorRandom}
      />
      <Description
       userRandom={userRandom}
       colorRandom={colorRandom}
      />
    </div>
    
  )
}

export default App
