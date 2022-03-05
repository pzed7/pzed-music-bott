module.exports = {
    app: {
        px: '/pz',
        token: 'OTQ5MzIzNDYxNDIyMDg4MTk0.YiIsXg.Gu2AqBOA9xJjCOTYRqN_yaaMCy8',
        playing: 'by pzed ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
