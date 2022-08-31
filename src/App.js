import { useState, useEffect } from 'react'
import Input from "./components/Input"
import "./App.css"
import Notes from './components/Notes'
import { v4 as uuid } from 'uuid';
function App() {


  // getting data from localstorage 
  const localData = JSON.parse(localStorage.getItem("notes"))
  const [notes, setnotes] = useState((localData))

  
  const removeNote = (id) => {
    setnotes(notes.filter(elem => elem.id !== id))
  }

  const addNote = (text, color) => {
    if(text !== ''){
      const date = new Date()
      const currentDate = `${date.getUTCDate()}-${date.getUTCMonth()}-${date.getUTCFullYear()}`
      const newElement = {
        id: uuid(),
        text: text,
        date: currentDate,
        color: color
      }
      setnotes([...notes, newElement])
    }else {
      alert('Enter something!!')
    }
  }


  // saving data to localstorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes) )
  }, [notes])
  

  return (
      <div className='row' id='main-section'>
        <div className="col-4 px-0" id='input-section'>
          <Input onAdd={addNote}/>
        </div>
        <div className="col-8 px-0" id='notes-section'>
          <Notes notes={notes} onRemove={removeNote}/>
        </div>
      </div>
  );
}

export default App;


// yellow - FFF9CA
// blue - 9ED2C6
// green - 5A8F7B
