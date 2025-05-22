import axios from 'axios';
import { toast } from 'react-toastify';

function SummaryButton({ todos }) {
  const handleSummarize = async () => {
    if (!todos.length) {
      toast.info('No to-dos to summarize');
      return;
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/summarize`);
      toast.success('Summary sent to Slack!');
      alert(`Summary:\n${response.data.summary}`);
    } catch (error) {
      toast.error('Failed to summarize or send to Slack');
    }
  };

  return (
    <button
      onClick={handleSummarize}
      className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600"
    >
      Summarize & Send to Slack
    </button>
  );
}

export default SummaryButton;