import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export function initialiseMatomo (router) {
  if(!process.env.VUE_APP_MATOMO_URL) return
  const emailHash = window.localStorage.getItem('emailHash')
  const config = matomoConfig(router)
  if (emailHash) Object.assign(config, {userId: emailHash})
  Vue.use(VueMatomo, config)
}

function matomoConfig (router) {
  return {
    // Configure host and site using build configuration
    host: process.env.VUE_APP_MATOMO_URL.replace('/matomo.php', ''),
    siteId: process.env.VUE_APP_MATOMO_SITE,

    // Enables automatically registering pageviews on the router
    router: router,

    // Enables link tracking on regular links. Note that this won't
    // work for routing links (ie. internal Vue router links)
    // Default: true
    enableLinkTracking: false,

    // Require consent before sending tracking information to matomo
    // Default: false
    requireConsent: false,

    // Whether to track the initial page view
    // Default: true
    trackInitialView: true,

    // Enable the heartbeat timer (https://developer.matomo.org/guides/tracking-javascript-guide#accurately-measure-the-time-spent-on-each-page)
    // Default: false
    enableHeartBeatTimer: true,

    // Set the heartbeat timer interval
    // Default: 15
    heartBeatTimerInterval: 60,

    // Share the tracking cookie across subdomains (see https://developer.matomo.org/guides/tracking-javascript-guide#measuring-domains-andor-sub-domains)
    // Default: undefined, example '*.example.com'
    cookieDomain: '*.speckle.arup.com',

    // Tell Matomo the website domain so that clicks on these domains are not tracked as 'Outlinks'
    // Default: undefined, example: '*.example.com'
    domains: '*.speckle.arup.com'
  }
  
}
