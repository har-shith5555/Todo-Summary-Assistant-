# Todo Summary Assistant

A full-stack application to manage to-do items, summarize pending tasks using Cohere's LLM, and send the summary to a Slack channel.

## Features
- Add, delete, and view to-do items.
- Generate a summary of pending to-dos using Cohere's LLM.
- Send the summary to a Slack channel via Incoming Webhooks.
- Responsive React frontend with Tailwind CSS.
- Node.js (Express) backend with Supabase PostgreSQL.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Axios, react-toastify
- **Backend**: Node.js, Express
- **Database**: Supabase (PostgreSQL)
- **LLM**: Cohere (text generation)
- **Slack**: Incoming Webhooks
- **Hosting**: Vercel (frontend), Render (backend)

Todo Summary Assistant

Todo Summary Assistant is a full-stack web application that simplifies task management by allowing users to create, manage, and summarize to-do lists. Integrated with Cohere’s LLM for natural language summarization and Slack for notifications, it streamlines productivity workflows with a sleek, interactive UI.
Features

To-do Management: Create, view, and delete to-do items with a user-friendly form and list.
LLM Summarization: Generate concise summaries of your to-dos using Cohere’s API.
Slack Integration: Send to-do summaries to a Slack channel via webhooks.
Interactive UI: Responsive design with hover effects, focus animations, and smooth transitions using Tailwind CSS.
Real-time Feedback: Success/error toasts for user actions via React Toastify.
Persistent Storage: Store to-dos in a Supabase PostgreSQL database.

Tech Stack

Frontend:
React (Vite)
Tailwind CSS (with interactive styling)
Axios (API requests)
React Toastify (notifications)


Backend:
Node.js (Express)
Supabase (PostgreSQL database)
Cohere (LLM summarization)
Slack (Incoming Webhooks)


Tools: VS Code, npm, PostCSS, Autoprefixer

Project Structure
todo-summary-assistant/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── cohere.js
│   │   │   ├── slack.js
│   │   │   ├── supabase.js
│   │   ├── routes/
│   │   │   ├── summarize.js
│   │   │   ├── todos.js
│   │   ├── server.js
│   ├── .env.example
│   ├── package.json
│   ├── README.md
├── frontend/
│   ├── public/
│   │   ├── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── SummaryButton.jsx
│   │   │   ├── TodoForm.jsx
│   │   │   ├── TodoList.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── README.md
├── README.md

Note: If your backend uses srcroutes instead of src/routes, update backend/src/server.js to reference require('./srcroutes/todos') and require('./srcroutes/summarize').
Prerequisites

Node.js: Version 16+ (18 or 20 recommended).
VS Code: With Tailwind CSS IntelliSense extension.
Accounts:
Supabase (free-tier) for the database.
Cohere (free-tier) for LLM summarization.
Slack with an app for Incoming Webhooks.



Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/todo-summary-assistant.git
cd todo-summary-assistant

2. Configure External Services
Supabase

Sign up at Supabase and create a project.
Copy the URL and anon public key from Settings > API.
Create a todos table in the SQL Editor:CREATE TABLE todos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



Cohere

Sign up at Cohere.
Copy the API key from the dashboard.

Slack

Create an app at Slack API.
Enable Incoming Webhooks and add a webhook for your channel.
Copy the webhook URL.

3. Set Up Environment Variables
Backend (backend/.env)
Create backend/.env based on backend/.env.example:
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
COHERE_API_KEY=your_cohere_api_key
SLACK_WEBHOOK_URL=your_slack_webhook_url
PORT=3000

Frontend (frontend/.env)
Create frontend/.env based on frontend/.env.example:
VITE_API_URL=http://localhost:3000

4. Install Dependencies
Backend
cd backend
npm install

Frontend
cd frontend
npm install

5. Address Yellow Lines in CSS (Optional)
If you see yellow lines under @apply in frontend/src/App.css or frontend/src/index.css (linter warnings, not errors):
cd frontend
npm install -D stylelint stylelint-config-standard stylelint-plugin-tailwindcss
echo '{
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-plugin-tailwindcss"],
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["tailwind", "apply"]
      }
    ]
  }
}' > .stylelintrc.json

Alternatively, disable VS Code CSS validation in settings.json:
{
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false
}

6. Run the Application
Backend
In a terminal:
cd backend
npm start


Runs on http://localhost:3000.

Frontend
In another terminal:
cd frontend
npm run dev


Runs on http://localhost:5173.

7. Test the Application

Open http://localhost:5173 in a browser.
Add To-do: Enter a title/description, click “Add To-do”.
Delete To-do: Click “Delete” on a to-do.
Summarize: Click “Summarize & Send to Slack” to generate and send a summary to your Slack channel.
Verify interactive styles (hover effects, focus rings) from App.css.

Troubleshooting

Yellow Lines in CSS: These are linter warnings, not errors. Follow Step 5 or ignore them.
CORS Errors: Ensure backend/src/server.js has app.use(cors()) and frontend/.env has VITE_API_URL=http://localhost:3000.
Supabase Errors: Verify SUPABASE_URL, SUPABASE_KEY, and the todos table.
Cohere/Slack Errors: Check COHERE_API_KEY and SLACK_WEBHOOK_URL in backend/.env.
srcroutes Issue: If using srcroutes instead of src/routes, update backend/src/server.js as noted.

Deployment

Backend: Deploy on Render with environment variables set.
Frontend: Deploy on Vercel, updating VITE_API_URL to the backend URL.

Contributing
Contributions are welcome! Please open an issue or submit a pull request.
License
MIT License
