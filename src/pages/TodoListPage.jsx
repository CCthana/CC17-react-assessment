import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from '../components/todoitem';
import { useNavigate } from 'react-router-dom';


function TodoListPage() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getAllTodo();
  }, []);

  const getAllTodo = async () => {
    try {
      const response = await axios.get('https://cc17-assessment-api.onrender.com/v1/todo?userId=15');
      setTodos(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const AddNewTodo = async () => {
    const data = { title: newTodo }
    try {
        const response = await axios.post('https://cc17-assessment-api.onrender.com/v1/todo?userId=15', data)
        const newData = [response.data.data, ...todos];
        setTodos(newData)
        setNewTodo('')
    } catch (error) {
        console.log(error)
    }
  }

  const handleInput = (event) => {
    setNewTodo(event.target.value)
    
}

const submit = (event) => {
  event.preventDefault();
  AddNewTodo();
  setNewTodo('');
}

const handleLogOut = () => {
  navigate('/')
}

  return (
    <div className='todo'>
      <div className='todo__box'>
        <form className='todo__add' onSubmit={submit}>
          <h1>My Todo</h1>
          <h4>new task</h4>
            <input value={newTodo} onChange={handleInput}/>
        </form>
        <ul className='todo__list'>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todoID={todo.id}  newTodo={newTodo} status={todo.status} />
          ))}
          
        </ul>
        <button className='todo__list_logoutBtn' onClick={handleLogOut}>Logout</button>
        </div>
        
      </div>
  )
}

export default TodoListPage