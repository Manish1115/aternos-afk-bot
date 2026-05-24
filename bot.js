const mineflayer = require('mineflayer')

function startBot() {

const bot = mineflayer.createBot({
    host: 'EmberValley.aternos.me',
    port: 39107,
    username: 'BotAFK999',
    auth: 'offline',
    version: '1.21.1'
})

bot.on('spawn', () => {
    console.log('Bot joined server')

    setInterval(() => {

        bot.setControlState('forward', true)

        setTimeout(() => {
            bot.setControlState('forward', false)
        }, 2000)

    }, 15000)
})

bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting in 10 seconds...')

    setTimeout(() => {
        startBot()
    }, 10000)
})

bot.on('kicked', console.log)

bot.on('error', err => {
    console.log(err)
})

}

startBot()
