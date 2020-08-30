const HelpCommand = require('./commands/help.js');
const DateCommand = require('./commands/date.js');
const ShrugCommand = require('./commands/shrug.js');

const Discord = require('discord.js');
const client = new Discord.Client();

const botUserId = '<@!749211769247105076>';
const botUserName = 'birdie';

client.on('ready', () => {
    console.log('Birdie is ready!');
});

client.on('message', message => {
    // do not respond to other bots
    if (message.author.bot) {
        return;
    }

    // actions
    if (message.content.startsWith(botUserId) || message.content.startsWith(botUserName)) {
        const content = message.content.split(' ');
        switch(content[1]) {
            case 'help':
                HelpCommand.run(message);
                break;
            case 'date':
                DateCommand.run(message);
                break;
            case 'ping':
                message.reply('pong');
                break;
            case 'shrug':
                ShrugCommand.run(message);
                break;
            default:
                message.channel.send(`"${content[1]}" is not a valid command.`);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
