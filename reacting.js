const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    const user = message.author;
    let ChannelID = message.channel.id
    if(ChannelID !== '755296307702398996') {
        return;
    }else {
        if (user.bot) {
            return;
        }else if (message.member.roles.cache.has('422713631973834754')) {
            return;
        }else if (message.member.roles.cache.has('676077597376905244')) {
            return;
        }else if (message.member.roles.cache.has('410252008965144596')) {
            return;
        }else if (message.content.startsWith('Suggestion:')) {
            message.react('759993041502339102');
            message.react('759992975769206805');
            message.react('759993041502339102');
        }else {
            message.delete();
            message.author.send('<@' + user.id + '>' + ', When making a suggestion, make sure that you have "Suggestion:" in front of it. Here are some examples. \n
✅ `Suggestion: Monster Gaming should do an Among Us video!`\n
❌ `Monster Gaming should do an Among Us video!`\n
❌ `Suggestion - Monster Gaming should do an Among Us video!`');
        }
    }
});

client.login('NzU5OTk4NjQ2NDY4NzM5MTEy.X3Fp5Q.txqfKnHZmke7kxC12K2ybpAj0KA');
