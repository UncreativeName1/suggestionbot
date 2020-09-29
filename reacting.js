const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    const user = message.author;
    let ChannelID = message.channel.id;
    let channel = 755296307702398996;
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
	    message.react('759993041502339102')
		.then(() => message.react('759992975769206805'))
        }else {
            message.delete();
            message.author.send('<@' + user.id + '>' + ', When making a suggestion, make sure that you have "Suggestion:" in front of it. Please read the pinned message in the suggestions channel for more info.');
        }
    }
});

client.on("messageReactionAdd", async (reaction, user) => {
    let message = reaction.message;
    if (user.bot) return;
    else if (message.member.roles.cache.has('422713631973834754' || '676077597376905244' || '410252008965144596'))
        if (reaction.emoji === '🗑️') {
            message.delete();
            message.author.send('Hey' + '<@' + message.author.id + '>, ' + 'unfortunately, your suggestion was rejected. We may reconsider this in the future but have no plans to implement this. \n Your ' + reaction.message);
        }else if (reaction.emoji === '⭐') {
            message.pin();
            message.author.send('Hey' + '<@' + message.author.id + '>, ' + 'we\'re happy to announce that we\'ve accepted your suggestion! It will be implemented into the server very soon, so stay tuned! \n Your ' + reaction.message)
        }else return;
    else return;

client.login('NzU5OTk4NjQ2NDY4NzM5MTEy.X3Fp5Q.txqfKnHZmke7kxC12K2ybpAj0KA');
