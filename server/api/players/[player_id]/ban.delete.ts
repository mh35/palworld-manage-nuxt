import { Axios, isAxiosError } from 'axios'

export default defineEventHandler(async (event) => {
  const playerId = event.context.params?.player_id
  if (!playerId) {
    setResponseStatus(event, 400)
    return {
      status: 'params-error',
    }
  }
  const config = useRuntimeConfig()
  const cl = new Axios({
    auth: {
      username: 'admin',
      password: config.apiPassword
    },
    responseType: 'text',
    responseEncoding: 'utf-8',
  })
  try {
    await cl.post(config.apiBase + '/v1/api/unban', {
      userid: playerId,
    })
    return {
      status: 'success'
    }
  } catch (e) {
    if (isAxiosError(e)) {
      if (e.response) {
        setResponseStatus(event, 500)
        return {
          status: 'error',
          code: e.response.status
        }
      } else {
        setResponseStatus(event, 503)
        return {
          status: 'server-down'
        }
      }
    } else {
      setResponseStatus(event, 500)
      return {
        status: 'server-error',
      }
    }
  }
})