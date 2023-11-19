import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';
import BotDetails from './BotDetails';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetchBots();
  }, []);

  function fetchBots() {
    fetch('http://localhost:8001/bots')
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }

  function handleBotClick(bot) {
    setSelectedBot(bot);
    setSelectedBots((prevSelectedBots) => (
      prevSelectedBots.find((selectedBot) => selectedBot.id === bot.id)
        ? prevSelectedBots
        : [...prevSelectedBots, bot]
    ));
  }

  function releaseBot(botId) {
    console.log("Releasing Bot ID:", botId);
    setSelectedBots((prevSelectedBots) => {
      const newSelectedBots = prevSelectedBots.filter((bot) => bot.id !== botId);
      console.log("New Selected Bots:", newSelectedBots);
      return newSelectedBots;
    });
  }

  function handleBotDischarge(botId) {
    console.log("Discharging Bot ID:", botId);
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    }).then(() => {
      setSelectedBots((prevSelectedBots) => prevSelectedBots.filter((bot) => bot.id !== botId));
    });
  }

  return (
    <div className="App">
    <BotArmy army={selectedBots} onBotClick={handleBotClick} onRelease={releaseBot} onDischarge={handleBotDischarge} />
      <BotCollection bots={bots} onBotClick={handleBotClick} />
      <BotDetails selectedBot={selectedBot} />
    </div>
  );
}

export default App;

