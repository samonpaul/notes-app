import React from 'react'
import Note from "./Note"

const Notes = (props) => {
  return (
    <div>
      
      <div className="note-section d-flex justify-content-between align-items-center flex-wrap pt-5 px-5 mx-0">
        {props.notes.map(ele => {
          return <Note data={ele} key={ele.id} onRemove={props.onRemove}/>
        })}
      </div>
    </div>

  )
}

export default Notes
