const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    const user = message.author;
    let ChannelID = message.channel.id;
    if (ChannelID !== '755296307702398996') {
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
	    message.react('759993041502339102')
		.then(() => message.react('759992975769206805'))
        }else {
            message.delete();
            message.author.send('<@' + user.id + '>' + ', When making a suggestion, make sure that you have "Suggestion:" in front of it. Please read the pinned message in the suggestions channel for more info.');
        }
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id !== '755296307702398996') {
        return;
    }else {
        if (reaction.emoji.name == '🗑️') { 
            reaction.message.delete();
            reaction.message.author.send(`Hey <@${reaction.message.author.id}>, unfortunately your suggestion was rejected. 

Your ${reaction.message}`);}
        else if (reaction.emoji.name == '⭐') { 
            reaction.message.pin();
            reaction.message.author.send(`Hey <@${reaction.message.author.id}>, your suggestion was accepted! We will be adding your feature into the server very shortly, so stay tuned! 

Your ${reaction.message}`);}
        else return;
    }
});



client.login('TOKEN');
