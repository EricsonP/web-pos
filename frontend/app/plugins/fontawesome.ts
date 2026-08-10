import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faLock, faHouse, faBox, faUsers, faCartShopping, faEnvelope, faPesoSign, faCircleUser, faBars, faGauge, faLayerGroup, faWarehouse, faTruckField, faBoxesStacked, faShopSlash, faUnlock, faRightFromBracket, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(
    faUser,
    faLock,
    faHouse,
    faBox,
    faUsers,
    faCartShopping,
    faEnvelope,
    faPesoSign,
    faCircleUser,
    faBars,
    faGauge,
    faLayerGroup,
    faWarehouse,
    faTruckField,
    faBoxesStacked,
    faShopSlash,
    faUnlock,
    faRightFromBracket,
    faBell
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})