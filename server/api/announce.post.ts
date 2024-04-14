import { Axios, isAxiosError } from 'axios'

import { AnnounceInput } from '~/types/api'

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as AnnounceInput
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
    await cl.post(config.apiBase + '/v1/api/announce', {
      message: body.message
    })
  } catch (e) {
    if (isAxiosError(e)) {
      if (e.response) {
        return {
          status: 'error',
          code: e.response.status
        }
      } else {
        return {
          status: 'server-down'
        }
      }
    } else {
      return {
        status: 'server-error',
      }
    }
  }
})