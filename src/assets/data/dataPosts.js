import dataJson from './data.json'

export const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataJson)
    }, 1000)
  })
  return promise
}
