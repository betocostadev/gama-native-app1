import axios from 'axios'


const sendContact = axios.create({
  baseURL: 'https://webhook.site/48c72cf7-d82c-41ae-a764-a70cc5dd101b'
})

export default sendContact
