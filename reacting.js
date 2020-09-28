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
            message.author.send('<@' + user.id + '>' + ', your suggestion must begin with "Suggestion:"!');
        }
    }
});

client.login('NzU5OTk4NjQ2NDY4NzM5MTEy.X3Fp5Q.txqfKnHZmke7kxC12K2ybpAj0KA');