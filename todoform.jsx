import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function TodoForm({ fetchTodos }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/todos`, {
        title,
        description,
      });
      setTitle('');
      setDescription('');
      fetchTodos();
      toast.success('To-do added successfully');
    } catch (error) {
      toast.error('Failed to add to-do');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Add To-do
      </button>
    </form>
  );
}

export default TodoForm;