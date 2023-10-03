import { useEffect, useState } from 'react'
import "./App.css"

function App() {
  const [h1, seth1] = useState("")
  useEffect(() => {
    fetch("https://prueba-backend-l387.onrender.com")
    .then(respuesta => respuesta.json())
    .then( ({r,g,b}) => seth1(`rgb(${r},${g},${b})`))
  },[])
  
  return (
    <>
      <section style={{backgroundColor : h1}}>
        <h1>{h1}</h1>
      </section>
    </>
  )
}

export default App
