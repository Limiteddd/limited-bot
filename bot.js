const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

switch (command) {
  case "ping" :
    message.channel.send('Pong!');
    break;
  case "blah" :
    message.channel.send('Meh.');
    break;
}
 

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
