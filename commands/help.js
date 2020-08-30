module.exports = {
    run: function(message) {
        message.channel.send(
            'Available commands:\n' +
            '  - date: show today\'s date\n' +
            '  - help: show all availble commands \n' +
            '  - reminder: not implemented\n' +
            '  - time: not implemented\n'
        );
    }
};

