import { Axios, isAxiosError } from 'axios'

import { ServerMetrics } from '~/types/api'

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
    const res = await cl.get<ServerMetrics>(
      config.apiBase + '/v1/api/metrics')
    return {
      status: 'success',
      metrics: res.data,
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
        status: 'server-error',
      }
    }
  }
})
