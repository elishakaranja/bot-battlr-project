import React from 'react';

function BotDetails({ selectedBot }) {
  if (!selectedBot) {
    return <div>selected a bot</div>;
  }

  return (
    <div className="bot-details">
      <h2>Selected Bot Details</h2>
      <img src={selectedBot.avatar_url} alt={selectedBot.name} />
      <h3>{selectedBot.name}</h3>
      <p>Class: {selectedBot.bot_class}</p>
      <p>Health: {selectedBot.health}</p>
      <p>Damage: {selectedBot.damage}</p>
      <p>Armor: {selectedBot.armor}</p>
      <p>Catchphrase: {selectedBot.catchphrase}</p>
    </div>
  );
}

export default BotDetails;
