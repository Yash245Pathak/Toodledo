import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todo from './components/Todo';
import { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';

const App = () => {
  let initTodo;
  if(localStorage.getItem("todo")===null){
    initTodo = [];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todo"))
  }

  const onDelete=(todos)=>{
    console.log("ondelete",todos)
    setTodo(todo.filter((e)=>{
        return e!== todos
      }))
    localStorage.setItem("todo", JSON.stringify(todo))
  }
  const addTodo = (title) =>{
    console.log("i m adding this todo")
    let key;
    if(todo.length===0){
      key=0;
    }
    else{
      key = todo[todo.length-1].key + 1
    }
    const myTodo ={
      key: key,
      title: title
    }
    setTodo([...todo,myTodo]);
    console.log(myTodo);
  }

  const [todo,setTodo ]= useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todo))
  },[todo])
  
  return (
    <div className="container">
    <Header title="ToodleDo"/>
    <AddTodo addTodo={addTodo}/>
    <Todo todos={todo} onDelete={onDelete}/>
    <Footer/> 
    </div>
  );
}

export default App;
