import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const Todo = () => {
    // const  {todos}  =useSelector((state) => state.todo )
    const { loding,error,todos } = useSelector((state)=>state.todo)
      console.log(todos)
  return loding ? <h1>.........LODING</h1> : error ? <h1>errorrr</h1>: (
    <div>
        {todos.map((el)=>
        <TodoItem key={el.id} {...el}/>)}
    </div>
  )
}

export default Todo