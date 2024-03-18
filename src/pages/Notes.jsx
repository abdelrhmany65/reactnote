import React, { useEffect, useState } from 'react'
import DummyNots from "../dummy_notes";
import NoteItem from "../component/NoteItem";

import { Link } from "react-router-dom";


import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { BsPlus } from "react-icons/bs";


function Notes({notes}) {

  const [showSearch, setshowSearch] = useState(false);
  const [text, settext] = useState('');
  const [filterNote, setfilterNote] = useState(notes);

  const handelSearch = () => {
    setfilterNote(notes.filter(note => {
      if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
        return note
      }
    }))
  }

  useEffect(handelSearch, [text])

  return (
    <section>
      <header className='notes__header'>
        {!showSearch && <h2> my notes </h2>}
        {showSearch && <input type="text" autoFocus placeholder='keyword..' value={text} onChange={(e) => {settext(e.target.value); handelSearch()}}/>}
        <button className='btn' onClick={() => setshowSearch (prevState => !prevState)}> {showSearch ? <MdClose /> : <CiSearch />}</button>
      </header>

      <div className="notes__container">
        {filterNote.length == 0 && <p className='empty__notes'>Note Notes found.</p>}
        {
          filterNote.map(note => <NoteItem key={note.id} note={note}/>)
          
        }
      </div>
      <Link to="/creat-note" className='btn add__btn'><BsPlus /></Link>
    </section>
  )
}

export default Notes