// Singleton
// Declared using constructors
// Object.create

//Literals

const mySym = Symbol("key1")

const User = {
  name: "asmit",
  age: 21,
  [mySym]: "mykey1",
  email: "asmit@gmail.com",
  isLoggedIn: false,
}

console.log(User.email)
console.log(User["email"])
console.log(User[mySym])

User.email = "asmit@openai.com"
Object.freeze(User)
User.email = "asmit@microsoft.com"
console.log(User)

User.greetings = function () {
  console.log("Hello User")
}
