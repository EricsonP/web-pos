import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faLock, faHouse, faBox, faUsers, faCartShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(
    faUser,
    faLock,
    faHouse,
    faBox,
    faUsers,
    faCartShopping,
    faEnvelope
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})