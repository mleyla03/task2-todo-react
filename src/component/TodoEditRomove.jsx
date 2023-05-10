import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoItem } from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./Form";

export const TodoEditRemove = () => {
  const [todos, setTodos] = useState([]);

  const li = (element) => {
    setTodos([
      ...todos,
      { id: uuidv4(), title: element,  edit: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((element) => element.id !== id));

  const ul = (id) => {
    setTodos(
      todos.map((element) =>
        element.id === id ? { ...element } : element
      )
    );
  }

  const add = (id) => {
    setTodos(
      todos.map((element) =>
        element.id === id ? { ...element, edit: !element.edit} : element
      )
    );
  }

  const edit = (title, id) => {
    setTodos(
      todos.map((element) =>
        element.id === id ? { ...element, title, edit: !element.edit} : element
      )
    );
  };

  return (
    <>
    
      <TodoItem list={li} />
     
      {todos.map((element) =>
        element.edit? (
          <Form add={edit} title={element} />
        ) : (
          <Todo
            key={element.id}
            title={element}
            deleteTodo={deleteTodo}
            add={add}
            ul={ul}
          />
        )
      )}
    </>
  );
};