import { connect } from 'mongoose'

const { DB_URL, PROTOCOL, USER, PASSWORD, DB_NAME, DB_PARAMS } = process.env

export const connectDatabase = async () => {
  try {
    await connect(
      `${PROTOCOL}://${USER}:${PASSWORD}@${DB_URL}/${DB_NAME}?${DB_PARAMS}`
    )
    console.log('Connected to DB')
  } catch (err) {
    console.log(err)
  }
}
