import React from 'react'
import { FaTrash as Icon } from "react-icons/fa";
import PropTypes from 'prop-types'

const Note = (props) => {

  return (
    <div className='note mb-4' style={{backgroundColor: props.data.color}}>
        {/* <span className='cross'><i class="fa-solid fa-trash"></i></span> */}
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="note-header py-2 d-flex justify-content-between align-items-center px-3">
                <p className='mb-0 date'>{props.data.date}</p>
                <p className="mx-1 mb-0" style={{cursor: 'pointer'}} onClick={() => props.onRemove(props.data.id)}><Icon/></p>
            </div>
            <div className="note-body py-3 text-left px-3">
              <p className="mb-0">{props.data.text}</p>
            </div>
        </div>
    </div>
  )
}

Note.propTypes = {
  color: PropTypes.string
}

Note.defaultProps = {
  color: '#f1f1f1'
}

export default Note