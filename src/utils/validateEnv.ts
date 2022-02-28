const { TOKEN, DB_URL, PROTOCOL, USER, PASSWORD, DB_NAME } = process.env
const params = [TOKEN, DB_URL, PROTOCOL, USER, PASSWORD, DB_NAME]
export const validateEnv = () => {
  // could probably have a !(a && b && c) nooed to double check boole algebra
  let flag: boolean = true
  const iteratedParams = params.map((param) => {
    if (!param) {
      console.warn(`${param} is missing`)
      flag = false
    }
  })
  return flag
}
