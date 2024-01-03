const user = {
  name: "asmit",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.name}, welcome to website`)
    console.log(this)
  },
}

// user.welcomeMessage()
// user.name = "akash"
// user.welcomeMessage()

// console.log(this) // global object is empty

// function chai() {
//   console.log(this)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return

// const reutnObject = (a, b) => ({ username: "asmit" })
// console.log(addTwo(3, 4))

// Immediately invoked function expressions 

(function chai(){
    console.log(`DB CONNECTED`)
})();

((name) => {
    console.log(`DB2 CONNECTED ${name}`)
})('asmit')
