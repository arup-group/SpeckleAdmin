import Vue from 'vue'
import VueMatomo from 'vue-matomo'
import Store from '../store/store'

export function initialiseMatomo (router) {
  const crypto = window.crypto
  const email = Store.state.user.email
  const userId = email ? crypto.subtle.digest('SHA256', email) : 'anon'
  if(email && email.includes('arup.com')) {
    Vue.use(VueMatomo, {
      // Configure your matomo server and site by providing
      host: 'https://arupdt.matomo.cloud',
      siteId: 1,
  
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
  
      // UserID passed to Matomo (see https://developer.matomo.org/guides/tracking-javascript-guide#user-id)
      // Default: undefined
      userId: userId,
  
      // Share the tracking cookie across subdomains (see https://developer.matomo.org/guides/tracking-javascript-guide#measuring-domains-andor-sub-domains)
      // Default: undefined, example '*.example.com'
      cookieDomain: '*.speckle.arup.com',
  
      // Tell Matomo the website domain so that clicks on these domains are not tracked as 'Outlinks'
      // Default: undefined, example: '*.example.com'
      domains: '*.speckle.arup.com'
    })
  }
}