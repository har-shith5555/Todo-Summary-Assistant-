const express = require('express');
const supabase = require('../config/supabase');
const cohere = require('../config/cohere');
const { sendToSlack } = require('../config/slack');
const router = express.Router();

// POST /summarize - Summarize todos and send to Slack
router.post('/', async (req, res) => {
  // Fetch pending todos
  const { data: todos, error } = await supabase
    .from('todos')
    .select('title, description')
    .eq('completed', false);

  if (error) return res.status(500).json({ error: error.message });
  if (!todos.length) return res.status(200).json({ summary: 'No pending to-dos.' });

  // Prepare prompt for Cohere
  const todoList = todos
    .map((todo) => `- ${todo.title}: ${todo.description || 'No description'}`)
    .join('\n');
  const prompt = `Summarize the following to-do list into a concise paragraph:\n${todoList}`;

  // Call Cohere API
  try {
    const response = await cohere.generate({
      model: 'command-r',
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.7,
    });
    const summary = response.body.generations[0].text.trim();

    // Send to Slack
    const slackResult = await sendToSlack(`To-Do Summary:\n${summary}`);
    if (!slackResult.success) {
      return res.status(500).json({ error: 'Failed to send summary to Slack' });
    }

    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;