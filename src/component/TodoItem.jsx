import React, {useState} from 'react'

export const TodoItem = ({list}) => {
    const [form, setForm] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
       
         
          list(form);
       
        
        
      };
  return (
    <form className='forms' onSubmit={handleSubmit}>
    <input type="text" required  onChange={(e) => setForm(e.target.value)}   />
    <button type="submit" >Add</button>
  </form>
  )
}