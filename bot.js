const mineflayer = require('mineflayer')

function createBot() {

const bot = mineflayer.createBot({
  host: 'EmberValley.aternos.me',
  port: 39107,
  username: 'EmberBot'
})

bot.on('spawn', () => {
  console.log('Bot joined server')

  setInterval(() => {
    bot.setControlState('jump', true)

    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)

  }, 30000)
})

bot.on('end', () => {
  console.log('Reconnecting...')
  setTimeout(createBot, 5000)
})

bot.on('error', err => console.log(err))
}

createBot()
