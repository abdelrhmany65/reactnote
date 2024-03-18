import React, { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Notes from "./pages/Notes";
import CreateNot from "./pages/CreateNot";
import EditNote from "./pages/EditNote";
import DummyNots from "./dummy_notes";




function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() =>{
    localStorage.setItem('notes',JSON.stringify(notes))
  }, [notes])

  return (
    <main id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes}/>} />
          <Route path='/creat-note' element={<CreateNot setNotes={setNotes}/>} />
          <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App