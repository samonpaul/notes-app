import React, { useState } from 'react'



const Input = (props) => {

  const [input, setinput] = useState('')

  const [noteColor, setNoteColor] = useState('#f1f1f1')

  const onAdd = () => {
    props.onAdd(input, noteColor)
    setinput('')
    setNoteColor('#f1f1f1')
  }


  const toggleNoteColor = (e) => {
    if(e.target.textContent === 'Yellow'){
      setNoteColor('#FFF9CA')
    }else if(e.target.textContent === 'Blue'){
      setNoteColor('#9ED2C6')
    }else if(e.target.textContent === 'Green'){
      setNoteColor('#5A8F7B')
    }
  }




  return (
    <div className='input-section d-flex flex-column input-field pt-5 justify-content-center align-items-center mb-3 px-4' >
      <h3 className='mb-4 text-center'> - Enter And Save Your Notes - </h3>
      <textarea
        name="input"
        maxLength={300}
        className='mb-4 form-control'
        id="input"
        cols="30"
        rows="5"
        value={input}
        onChange={e => { setinput(e.target.value) }}
      ></textarea>

      <div className="w-100 py-3 d-flex flex-column justify-content-between align-items-start flex-wrap mb-4 flex-wrap">
        <p className='mb-3'>Total Characters - {input.length}</p>
        <p className='mb-2'>Total Words - {input.split(' ').filter(ele => { return ele.length !== 0 }).length}</p>
      </div>
      <div className="py-2 w-100">
        <p className='mb-0'>Choose Color</p>
      </div>
      <div className="py-2 d-flex justify-content-between flex-wrap align-items-center w-100 mb-4">

        <div className="form-check form-check-inline mb-3">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="#FFF9CA"/>
            <label className="form-check-label px-4 py-2" htmlFor="inlineRadio1" 
            onClick={toggleNoteColor} style={{backgroundColor: noteColor === "#FFF9CA" ? "#FFF9CA" : "#f1f1f1"}}>Yellow</label>
        </div>
        <div className="form-check form-check-inline mb-3">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="#9ED2C6" />
            <label className="form-check-label px-4 py-2" htmlFor="inlineRadio2" onClick={toggleNoteColor} 
            style={{backgroundColor: noteColor === "#9ED2C6" ? "#9ED2C6" : "#f1f1f1"}}>Blue</label>
        </div>
        <div className="form-check form-check-inline mb-3">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="#5A8F7B" />
            <label className="form-check-label px-4 py-2" htmlFor="inlineRadio3" onClick={toggleNoteColor}
            style={{backgroundColor: noteColor === "#5A8F7B" ? "#5A8F7B" : "#f1f1f1"}}>Green</label>
        </div>
      </div>
      <button className='btn btn-primary px-4 mb-4' id='saveNote' onClick={onAdd}>Save Note</button>


    </div>
  )
}

export default Input