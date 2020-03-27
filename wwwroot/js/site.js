// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
const connection = new signalR.HubConnectionBuilder()
  .withUrl("/ChatHub")
  .build();

//send message
document.getElementById("sendMessage").addEventListener("click", even => {
  const user = document.getElementById("userName").value;
  const message = document.getElementById("userMessage").value;

  connection
    .invoke("SendMessage", user, message)
    .catch(ex => console.log(ex.toString()));

  event.preventDefault();
});

//receive message
connection.on("ReceiveMessage", (user, messge) => {
  const rec_msg = user + ":" + messge;
  console.log(rec_msg.toString());
  const li = document.createElement("li");
  li.textContent = rec_msg;
  document.getElementById("messageList").appendChild(li);
});

connection.start().catch(ex => console.log(ex.toString()));
