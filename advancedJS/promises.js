// Promise is an object representing the eventual completion or failure

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task")
    resolve()
  }, 1000)
}) // creating a new instance of Promise object

promiseOne.then(function () {
  console.log("Promise Consumed")
})

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task")
    resolve()
  }, 1000)
}).then(function () {
  console.log("Promise Consumed")
})

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "asmit",
      email: "asmit@gmail.com",
    })
  }, 1000)
})

promiseThree.then(function (user) {
  console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false
    if (!error) {
      resolve({ username: "asmit", password: "1234" })
    } else {
      reject("ERROR: Something went wrong")
    }
  }, 1000)
})

promiseFour
  .then((user) => {
    console.log(user)
    return user.username
  })
  .then((username) => {
    // Here we are chaining more than one then calls and the above
    //callback of then is returning username value to this then callback.
    console.log(username)
  })
  .catch(function (error) {
    console.log(error)
  })
  .finally(() => console.log("The promise is resolved or rejected"))

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true
    if (!error) {
      resolve({ username: "javascript", password: "1234" })
    } else {
      reject("ERROR: Javascript went wrong")
    }
  }, 1000)
})

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive()

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     //console.log(response)
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log("E: ", error)
//   }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.log(error))
