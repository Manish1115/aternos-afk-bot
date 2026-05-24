const mineflayer = require('mineflayer')

function startBot() {

const bot = mineflayer.createBot({
    host: 'EmberValley.aternos.me',
    port: 25565,
    username: 'EmberBot01',
    auth: 'offline',
    version: '1.21.1'
})

bot.on('spawn', () => {
    console.log('Bot joined server')

    let moving = false

    setInterval(() => {

        if (moving) {
            bot.setControlState('forward', false)
            bot.setControlState('left', false)
            bot.setControlState('jump', false)
            moving = false
        } else {
            bot.setControlState('forward', true)
            bot.setControlState('left', true)
            bot.setControlState('jump', true)
            moving = true
        }

    }, 5000)
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
