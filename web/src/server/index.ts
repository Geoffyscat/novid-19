import axios from "axios";


const server = axios.create({
  // baseURL: 'localtion:33775'
  baseURL: "http://localhost:33775"
})

export const getList = (): Promise<{}> => server.get('/api/list').then(r => r.data)
