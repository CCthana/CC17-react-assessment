import axios from 'axios';
import { useState } from 'react';


function TodoItem(props) {
  const { todo , setTodos , todoID , newTodo , status } = props; 
  const [isCheck, setIsCheck] = useState(status)

  const deleteTodo = async (todoId) => {
   if (!todoId) return;
   try {  await axios.delete(`https://cc17-assessment-api.onrender.com/v1/todo/${todoId}?userId=15`);
     console.log('delete success');
     setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
   } catch (error) {
     console.log(error);
   }
 };

 const updateStatus = async (id , isCheck) => {
   const data = isCheck ? { status: true, title: todo.title } : { status: false, title: todo.title }
   try {
       await axios.patch(`https://cc17-assessment-api.onrender.com/v1/todo/${id}?userId=15`, data)
   } catch (error) {
       console.log(error)
   }
}

const handleCheckbox = (event) => {
   updateStatus(todoID, event.target.checked)
   setIsCheck(!isCheck)
}

 
  return (
    <li className='todo__list_item'>
      <div className='todo__list_item_title' >
         <input type="checkbox" onChange={handleCheckbox}checked={isCheck}/>
         <h4  className={isCheck ? 'checked_input' : null} >{todo.title}</h4>
      </div>
         <button onClick={() => deleteTodo(todo.id)}>x</button>

    </li>
  );
}

export default TodoItem;