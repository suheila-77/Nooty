import React from 'react'
import './Style.css'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Form from './Form'
import Note from './Note'
const root = document.querySelector("#root")
ReactDOM.createRoot(root).render(

  <div>
   
    <Header/>
    <Note/>
    {/* <Form/> */}
  </div>

)