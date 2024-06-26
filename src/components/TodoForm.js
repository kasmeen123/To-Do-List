import React, {useState, useEffect, useRef} from 'react'
import { UilPlusCircle } from '@iconscout/react-unicons'

function TodoForm(props) {

 
    const [input, setInput] = useState(props.edit ? props.edit.value: '');

    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);  
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
    }
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ?  (
        <>
        <input 
        type="text"
        placeholder=""
        value={input}
        name="text"
        className="todo-input edit"
        onChange={handleChange}
        ref={inputRef} 
        />
        <button className="todo-button edit">Update</button>
        </>
        ) :
        <>
        <input 
        type="text"
        placeholder="Add the task"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef} 
        />
        <button className="todo-button">
          <UilPlusCircle className="plus-icon"/>
          
        </button>
        </>
        }
      </form>
    </div>
  )
}

export default TodoForm;
