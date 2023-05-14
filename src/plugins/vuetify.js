import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi'
    }
})

export default vuetify;