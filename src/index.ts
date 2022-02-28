import { Client } from 'discord.js'
import { IntentOptions } from './config/IntentOptions'
import { connectDatabase } from './database/connectDatabase'

const { TOKEN } = process.env

;(async () => {
  const BOT = new Client({ intents: IntentOptions })
  BOT.on('ready', () => console.log('Connected to Discord!'))
  await connectDatabase()
  await BOT.login(TOKEN)
})()
