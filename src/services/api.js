import axios from 'axios'

const api = axios.create({
    baseURL:'https://apisimulador.qualicorp.com.br'
})



export default api;