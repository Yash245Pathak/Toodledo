import React from 'react'

const TodoItem = ({todos,onDelete}) => {
  return (
    <div className='container'>
      <li key={todos.key} className='my-3 h5'>{todos.title}</li>
      {/* <p className='my-3 h5'>{todos.title}</p> */}
      <button className='btn btn-danger btn-sm my-2' onClick={()=>onDelete(todos)}>Delete</button>
    </div>
  )
}

export default TodoItem
