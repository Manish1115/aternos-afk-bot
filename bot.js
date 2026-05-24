const mineflayer = require('mineflayer')

function createBot() {

const bot = mineflayer.createBot({
  host: 'EmberValley.aternos.me',
  port: 39107,
  username: 'EmberBot',
  version: '1.21.1'
})

bot.on('spawn', () => {
  console.log('Bot joined server')

  let moving = false

  setInterval(() => {

    if (moving) {
      bot.setControlState('forward', false)
      bot.setControlState('jump', false)
      moving = false
    } else {
      bot.setControlState('forward', true)
      bot.setControlState('jump', true)
      moving = true
    }

  }, 10000)
})

bot.on('end', () => {
  console.log('Reconnecting...')
  setTimeout(createBot, 5000)
})

bot.on('error', err => console.log(err))
}

createBot()
