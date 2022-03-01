import { onReady } from './events/onReady'
import { Client } from 'discord.js'
import { IntentOptions } from './config/IntentOptions'
import { connectDatabase } from './database/connectDatabase'
import { onInteraction } from './events/onInteraction'
import { validateEnv } from './utils/validateEnv'

const { TOKEN } = process.env

;(async () => {
  if (!validateEnv()) return
  const BOT = new Client({ intents: IntentOptions })

  BOT.on('ready', async () => await onReady(BOT))

  BOT.on(
    'interactionCreate',
    async (interaction) => await onInteraction(interaction)
  )

  await connectDatabase()

  await BOT.login(TOKEN)
})()
