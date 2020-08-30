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
                message.channel.send(
                    'Available commands:\n' +
                    '  - date: show today\'s date\n' +
                    '  - help: show all availble commands \n' +
                    '  - reminder: not implemented\n' +
                    '  - time: not implemented\n'
                );
                break;
            case 'date':
                const monthNames = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ];
                const dayNames = [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ];

                const today = new Date();
                message.channel.send(`Today is ${dayNames[today.getDay()]}, ${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`);
                break;
            case 'ping':
                message.reply('pong');
                break;
            case 'shrug':
                message.channel.send('¯\\_(ツ)_/¯');
                break;
            default:
                message.channel.send(`"${content[1]}" is not a valid command.`);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
