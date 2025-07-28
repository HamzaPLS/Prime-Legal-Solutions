function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  const logs = document.getElementById("chatlogs");

  // Display user message
  logs.innerHTML += `<div class="chat-msg user"><strong>You:</strong> ${msg}</div>`;

  // Dummy AI response (static)
  let reply = "I’m your AI assistant! (This is a test reply)";
  if (msg.toLowerCase().includes("help")) reply = "Sure! How can I assist you?";
  if (msg.toLowerCase().includes("hello")) reply = "Hello there!";

  logs.innerHTML += `<div class="chat-msg"><strong>AI:</strong> ${reply}</div>`;
  input.value = "";
  logs.scrollTop = logs.scrollHeight;
}
