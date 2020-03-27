using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace dotnetcore_chat_signalr {
    public class ChatHub : Hub {
        public async Task SendMessage (string user, string message) {
            await Clients.All.SendAsync ("ReceiveMessage", user, message);
        }
    }
}