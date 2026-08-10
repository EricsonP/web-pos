import axios from 'axios'

export default defineNuxtPlugin(() => {
    const api = axios.create({
        baseURL: 'http://web-pos.test',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })

    return {
        provide: {
            api,
        }
    }
})