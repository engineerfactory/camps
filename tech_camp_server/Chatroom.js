module.exports = function({ name, url }) {
  const members = new Map();
  let chatHistory = [];

  function broadcastMessage(message) {
    members.forEach(m => m.emit("message", message));
  }

  function addEntry(entry) {
    chatHistory = chatHistory.concat(entry);
  }

  function getChatHistory() {
    return chatHistory.slice();
  }

  function addUser(client) {
    members.set(client.id, client);
  }

  function removeUser(client) {
    members.delete(client.id);
  }

  function serialize() {
    return {
      name,
      url,
      numMembers: members.size
    };
  }

  return {
    broadcastMessage,
    addEntry,
    getChatHistory,
    addUser,
    removeUser,
    serialize
  };
};
