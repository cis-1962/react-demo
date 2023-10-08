import { useState } from 'react';
import TodoItem from './components/todo-item';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div className="container">
      <h1 className="text-2xl">Awesome App</h1>
      <input
        type="text"
        onChange={(evt) => setText(evt.target.value)}
        value={text}
      />
      <button
        type="button"
        onClick={() => {
          setTodos((t) => [...t, text]);
          setText('');
        }}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            content={todo}
            onRemove={() => {
              setTodos((t) => t.filter((iter) => iter !== todo));
            }}
            // setTodos={setTodos}
            key={todo}
          />
        ))}
      </ul>
    </div>
  );
}
