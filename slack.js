const axios = require('axios');
require('dotenv').config();

const sendToSlack = async (message) => {
  try {
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: message,
    });
    return { success: true };
  } catch (error) {
    console.error('Slack error:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendToSlack };