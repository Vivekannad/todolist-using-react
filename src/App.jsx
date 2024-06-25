import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
      setTodos(JSON.parse(storedTodos));
  }, []);

const saveLS = () => {
    localStorage.setItem('todos',JSON.stringify(todos))
}
  const addHandler = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}]);
    setTodo('');
    saveLS()
  };

  const editHandler = (id) => {
    const filteredValue = todos.filter((item) => item.id === id);
    setTodo(filteredValue[0].todo);
    const filter = todos.filter((items) => items.id!== id);
    setTodos(filter);
    saveLS()
  };

  const deleteHandler = (id) => {
    const filteredValue = todos.filter((items) => items.id!== id);
    setTodos(filteredValue);
    saveLS()
  };

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const checkHandler = (e) => {
    const id = e.target.name;
    const index = todos.findIndex((item) => item.id === id);
    const newTodo = [...todos];
    newTodo[index].isCompleted =!newTodo[index].isCompleted;
    setTodos(newTodo);
    saveLS()
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-3/4 bg-violet-100 rounded-xl my-5 p-2 min-h-[70vh] flex flex-col align-middle">
        <div className="addtodo my-5">
          <h2 className="font-semibold text-lg">Add todo</h2>
          <input type="text" className="w-1/2" onChange={changeHandler} value={todo} />
          <button onClick={addHandler} className="bg-purple-700 hover:bg-purple-950 px-2 py-1 mx-2 rounded-lg text-white">
            Add
          </button>
        </div>
        <h2 className="font-semibold text-lg ">Your Todos</h2>
        <div className="todos">
          {(!todos || todos.length === 0)? (
            <h1>No lists to display</h1>
          ) : (
            todos.map((item) => {
              return (
                <div className="todo flex my-2 justify-between w-3/4" key={item.id}>
                  <input type="checkbox" name={item.id} onChange={checkHandler} />
                  <div className="text">
                    <p className={item.isCompleted? 'line-through' : ''}>{item.todo}</p>
                  </div>
                  <div className="buttons text-white">
                    <button onClick={() => editHandler(item.id)} className="bg-purple-700 hover:bg-purple-950 px-2 py-1 mx-1 rounded-lg">
                      Edit
                    </button>
                    <button onClick={() => deleteHandler(item.id)} className="bg-purple-700 hover:bg-purple-950 px-2 py-1 mx-1 rounded-lg">
                      delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default App;