const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjUxOTk5MTM0NTg0NDA2MDQ1.Xeiw0Q.LBFBFUvr6sAsei0zxreOIAznVrc';

bot.on('ready', () => {
    console.log('Bolt27 is online');
})

bot.on('message', msg=> {
    if(msg.content === 'Marco' || msg.content === 'marco') {
        msg.reply('Polo');
    } 
})

bot.login(token);