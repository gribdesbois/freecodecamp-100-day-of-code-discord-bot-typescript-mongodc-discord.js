import { Document, model, Schema } from 'mongoose'

export interface CamperInt extends Document {
  discordId: string
  round: number // represents the round the user is on in the challenge
  day: number // represents the day the user is on in the challenge
  timestamp: number // track when the user last submitted a 100 Days of Code post
}

export const Camper = new Schema({
  discordId: String,
  round: Number,
  day: Number,
  timestamp: Number,
})

export default model<CamperInt>('camper', Camper)
