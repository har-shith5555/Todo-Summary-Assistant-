import axios from 'axios';
import { toast } from 'react-toastify';

function TodoList({ todos, fetchTodos }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/todos/${id}`);
      fetchTodos();
      toast.success('To-do deleted successfully');
    } catch (error) {
      toast.error('Failed to delete to-do');
    }
  };

  return (
    <ul className="mb-6">
      {todos.length === 0 && <li className="text-gray-500">No to-dos yet.</li>}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-3 border-b bg-gray-50 rounded"
        >
          <div>
            <strong>{todo.title}</strong>
            {todo.description && <p className="text-gray-600">{todo.description}</p>}
          </div>
          <button
            onClick={() => handleDelete(todo.id)}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;