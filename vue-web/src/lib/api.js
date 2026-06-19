import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  withCredentials: true,
})

export function resolveAssetUrl(assetPath) {
  if (!assetPath) {
    return ''
  }

  if (/^(https?:|data:)/.test(assetPath)) {
    return assetPath
  }

  const baseOrigin = api.defaults.baseURL
    ? new URL(api.defaults.baseURL, window.location.origin).origin
    : window.location.origin

  return new URL(assetPath, baseOrigin).toString()
}

export default api
