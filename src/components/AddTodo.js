import React,{useState} from "react";

const AddTodo = (props) => {
  const [title,setTitle]=useState("")
  
  const submit = (e) =>{
    e.preventDefault();
    if(!title){
      alert("Toodle Do cannot be blank");
    }
    props.addTodo(title)
    setTitle("")
  }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label h3 my-3">
            Toodle Do:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control my-3"
            id="todo"
          />
        </div>
        <button type="submit" className="btn btn-success">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
