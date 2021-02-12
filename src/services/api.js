import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
  /**
   * Ios com emulador: localhost 
   * Ios com fisico: Ip da maquina
   * Android com emulador: localhost (abd reverse tcp:3333 tcp:3333)
   * Android com emulator: 10.0.2.2 (android studio)
   * Android com fisico: Ip da maquina
   */
});

export default api;