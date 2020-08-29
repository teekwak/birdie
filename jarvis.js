const Discord = require('discord.js');
const client = new Discord.Client();

const BOT_NAME = 'Jarvis'

client.on('ready', () => {
    console.log('Jarvis bot is ready!');
});

client.on('message', message => {
    // do not respond to other bots
    if (message.author.bot) {
        return;
    }

    // actions
    if (message.content.startsWith('<@!749211769247105076>') || message.content.startsWith('jarvis') || message.content.startsWith('Jarvis')) {
        const content = message.content.split(' ');
        switch(content[1]) {
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
                ]

                const today = new Date();
                message.channel.send(`Today is ${dayNames[today.getDay()]}, ${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`);
                break;
            case 'ping':
                message.reply('pong');
                break;
            default:
                message.channel.send(`"${content[1]}" is not a valid command.`);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
