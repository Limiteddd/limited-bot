const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'torrent') {
    	message.reply('Úristen kalózkodós poor kid vagy,vedd meg inkább a játékot ne töltsd le torrentel!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
