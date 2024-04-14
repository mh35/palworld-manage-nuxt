import { Axios, isAxiosError } from 'axios'

import { ServerSettings } from '~/types/api'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const cl = new Axios({
    auth: {
      username: 'admin',
      password: config.apiPassword
    },
    responseType: 'json',
    responseEncoding: 'utf-8',
    transformResponse: [(data) => {
      if (typeof data === 'string') {
        return JSON.parse(data.replace("\t", " "))
      }
      return data
    }]
  })
  try {
    const res = await cl.get<ServerSettings>(
      config.apiBase + '/v1/api/settings')
    return {
      status: 'success',
      settings: res.data
    }
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
        status: 'server-error'
      }
    }
  }
})