import {defineConfig} from 'vite'
import crypto from 'crypto'
export default defineConfig({
  html:{
    cspNonce:'nonce666'
  },
  server:{
    headers:{
      "content-security-policy":`script-src 'self' 'nonce-${crypto.randomBytes(16).toString('base64')}';style-src 'self' 'nonce-${crypto.randomBytes(16).toString('base64')}'`
    }
  }
})