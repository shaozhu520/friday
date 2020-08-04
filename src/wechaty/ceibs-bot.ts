import {
  Wechaty,
  log,
}                   from 'wechaty'
import { PuppetOA }  from 'wechaty-puppet-official-account'

function getCeibs (name: string) {
  log.verbose('getWechaty', 'getCeibs(%s)', name)

  const oa = new PuppetOA({
    appId           : process.env.CEIBS_APP_ID,
    appSecret       : process.env.CEIBS_APP_SECRET,
    token           : process.env.CEIBS_TOKEN,
    webhookProxyUrl : process.env.CEIBS_WEBHOOK_PROXY_URL,
  })

  const bot = new Wechaty({
    name,
    puppet: oa,
  })

  return bot
}

export { getCeibs }
