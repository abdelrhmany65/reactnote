import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import { IoIosArrowBack } from "react-icons/io";
import UseCreatDate from "../component/UseCreate";

function CreateNot({setNotes}) {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = UseCreatDate();
  const navigate = useNavigate();


  const handelSubmit = (e) => {
    e.preventDefault();
    if(details && title){
      const note = {
        id: uuid(),
        title , details, date
      }
      setNotes(prevNotes => [note, ...prevNotes])
      navigate("/");
      // console.log(note);
    }
  }

  return (
    <section>
      
      <header className='create-note__header'>
        <Link to="/" className='btn'><IoIosArrowBack /></Link>
        <button className='btn lg primary' onClick={handelSubmit}>Save</button>
      </header>
      <form className='create-note__form' onSubmit={handelSubmit}>
        <input type="text" placeholder='Title' autoFocus value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea  rows="28" placeholder='Note details ..' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default CreateNot