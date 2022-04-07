import React from 'react'
import TodoItem from './TodoItem'

const Todo = (props) => {
  return (
    <div className='container'>
      <h2 className='my-3'>ToodleDo List:</h2>
      {props.todos.length===0? "No Toodle Do To Preview": 
      props.todos.map(todo=>{
          return(
            <> <TodoItem todos={todo} key={todo.key} onDelete={props.onDelete}/> </>
          ) 
      })
      }
    </div>
  )
}

export default Todo
