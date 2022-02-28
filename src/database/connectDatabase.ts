import { connect } from 'mongoose'

const { DB_URL, PROTOCOL, USER, PASSWORD, DB_NAME, DB_PARAMS } = process.env

export const connectDatabase = async () => {
  try {
    await connect(
      `${PROTOCOL as string}://${USER as string}:${PASSWORD as string}@${
        DB_URL as string
      }/${DB_NAME as string}?${DB_PARAMS as string}`
    )
    console.log('Connected to DB')
  } catch (err) {
    console.log(err)
  }
}
