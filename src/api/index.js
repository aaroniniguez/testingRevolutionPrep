import data from './data.json'

export default {
  fetch() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  }
}
