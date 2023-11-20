import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';
import BotDetails from './BotDetails';
import './App.css';

function App() {
  // State to store the list of bots fetched from the server
  const [bots, setBots] = useState([]);
  
  // State to store the bots enlisted in the army
  const [selectedBots, setSelectedBots] = useState([]);
  
  // State to store details of the currently selected bot
  const [selectedBot, setSelectedBot] = useState(null);

  // Fetch bots from the server when the component mounts
  useEffect(() => {
    fetchBots();
  }, []);

  // Function to fetch bots from the server
  function fetchBots() {
    fetch('https://json-3dsp.onrender.com/bots')
      .then((response) => response.json())
      .then((bots) => setBots(bots));
  }

  // Function to handle clicks on bot cards
  function handleBotClick(bot) {
    setSelectedBot(bot);
    setSelectedBots((prevSelectedBots) => (
      // Enlist the bot only if it's not already enlisted
      prevSelectedBots.find((selectedBot) => selectedBot.id === bot.id)
        ? prevSelectedBots
        : [...prevSelectedBots, bot]
    ));
  }

  // Function to release a bot from the army
  function releaseBot(botId) {
    console.log("Releasing Bot ID:", botId);
    setSelectedBots((prevSelectedBots) => {
      // Filter out the released bot from the enlisted bots
      const newSelectedBots = prevSelectedBots.filter((bot) => bot.id !== botId);
      console.log("New Selected Bots:", newSelectedBots);
      return newSelectedBots;
    });
  }

  // Function to discharge a bot permanently
  function handleBotDischarge(botId) {
    console.log("Discharging Bot ID:", botId);
    
    // Trigger a DELETE request to remove the bot from the server
    fetch(`https://json-3dsp.onrender.com/bots/${botId}`, {
      method: 'DELETE',
    }).then(() => {
      // Remove the bot from the enlisted bots on the frontend
      setSelectedBots((prevSelectedBots) => prevSelectedBots.filter((bot) => bot.id !== botId));
    });
  }

  // Render the main application
  return (
    <div className="App">
      {/* Render the enlisted bot army */}
      <BotArmy army={selectedBots} onBotClick={handleBotClick} onRelease={releaseBot} onDischarge={handleBotDischarge} />
      
      {/* Render the collection of available bots */}
      <BotCollection bots={bots} onBotClick={handleBotClick} />
      
      {/* Render details of the currently selected bot */}
      <BotDetails selectedBot={selectedBot} />
    </div>
  );
}

// Export the App component as the default export
export default App;
