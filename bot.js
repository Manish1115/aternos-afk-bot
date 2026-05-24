const mineflayer = require('mineflayer')

let bot = null
let reconnecting = false

function startBot() {

    bot = mineflayer.createBot({
        host: 'EmberValley.aternos.me',
        port: 25565,
        username: 'EmberBot01',
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

        }, 10000)
    })

    bot.on('end', () => {

        if (reconnecting) return
        reconnecting = true

        console.log('Bot disconnected. Reconnecting in 15 seconds...')

        setTimeout(() => {
            reconnecting = false
            startBot()
        }, 1000)
    })

    bot.on('kicked', (reason) => {
        console.log('KICKED:', reason)
    })

    bot.on('error', (err) => {
        console.log(err)
    })
}

startBot()
