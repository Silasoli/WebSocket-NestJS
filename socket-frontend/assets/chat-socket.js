const socket = io("http://localhost:3000", { transports: ["websocket"] });
const message = document.getElementById("message");
const messages = document.getElementById("messages");

socket.on("message", ({ data }) => {
  handleNewMessage(data);
});

function handleSubmitNewMessage() {
  socket.emit("message", { data: message.value });
  message.value='';
}

function handleNewMessage(message) {
  messages.appendChild(buildNewMessage(message));
}

function buildNewMessage(message) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`User: ${message}`));
  li.classList.add("message");
  return li;
}
