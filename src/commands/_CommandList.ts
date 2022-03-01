import { help } from './help'
import { view } from './view'
import { edit } from './edit'
import { CommandInt as Command } from '../interfaces/Command'
import { oneHundred } from './oneHundred'

export const CommandList: Command[] = [oneHundred, edit, view, help]
