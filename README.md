# Bot Army React App
This is a simple React application that allows users to manage a collection of bots, enlist them in an army, and view details about individual bots. The app makes use of React state and useEffect for fetching data from a server.

## Getting Started
To run the application locally, follow these steps:

Clone the Repository:
git clone https://github.com/your-username/bot-army-react-app.git

cd bot-army-react-app

Install Dependencies:

npm install

Run the Application:
npm start
This will start the development server, and you can view the app by navigating to http://localhost:3000 in your web browser.

### Features
Enlist Bots in Your Army:

Click on bot cards in the "Bot Collection" section to enlist them in your bot army.
Release Bots from Your Army:

In the "Bot Army" section, click the "X" button or "Release" button to release a bot from your army.
Discharge Bots Permanently:

View Bot Details:

The "Bot Details" section displays information about the currently selected bot.
Components
App Component:

The main component that orchestrates the application, manages state, and handles API calls.
BotCollection Component:

Renders the collection of available bots.
Allows users to click on bot cards to enlist them in the army.
BotArmy Component:

Displays the enlisted bot army.
Provides options to release or discharge bots.
BotDetails Component:

Shows details of the currently selected bot.
### API Integration
The app fetches bot data from a server using the fetch API.
Bots can be permanently discharged by triggering a DELETE request to the server.