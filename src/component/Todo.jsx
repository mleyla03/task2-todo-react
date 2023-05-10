import React from 'react'

export const Todo = ({title, deleteTodo, add, ul}) => {
 
  return (
    <>
      <div className='center'>
        <div className='bir'>  
         <div className='text' onClick={() => ul(title.id)}>{title.title}</div>
         <div  className="ones"onClick={() => add(title.id)} ><i class="fa-solid fa-pen-to-square"></i></div>
         <div  className="one"onClick={() =>  deleteTodo(title.id)} ><i class="fa-solid fa-trash"></i></div>
        </div>
      </div>
      
        
    </>
  )
}