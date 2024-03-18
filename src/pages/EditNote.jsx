import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import UseCreatDate from '../component/UseCreate';


const EditNote = ({notes, setNotes}) => {


  const {id} = useParams()
  const note = notes.find((item) => item.id == id)
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
 
  const date = UseCreatDate();
  const navigate = useNavigate();


  const HandelForm = (e) =>{
    e.preventDefault();

    if (title, details) {
      const newNote = {...note, title, details, date}

     const newNotes = notes.map( item => {
      if (item.id  == id) {
        item = newNote;
      }
      return item
     })

     setNotes(newNotes)

    }

    navigate('/')
  }

  const handelDelet = () => {
    if (window.confirm('are you sure you want to delte?')) {
      const newNotes = notes.filter(item => item.id != id);
      setNotes(newNotes)
      navigate('/')
    }
  }


  return (
    <section>
      
      <header className='create-note__header'>
        <Link to="/" className='btn'><IoIosArrowBack /></Link>
        <button className='btn lg primary' onClick={HandelForm}>Save</button>
        <button className='btn danger' onClick={handelDelet}><RiDeleteBin6Line /></button>

      </header>
      <form className='create-note__form' onSubmit={HandelForm}>
        <input type="text" placeholder='Title' autoFocus value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea  rows="28" placeholder='Note details ..' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default EditNote