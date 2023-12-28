// Singleton
// Declared using constructors
// Object.create
// const obj = new Object()

//Literals

const mySym = Symbol("key1")

const User = {
  name: "asmit",
  age: 21,
  [mySym]: "mykey1",
  email: "asmit@gmail.com",
  isLoggedIn: false,
}

// console.log(User.email)
// console.log(User["email"])
// console.log(User[mySym])

User.email = "asmit@openai.com"
Object.freeze(User)
User.email = "asmit@microsoft.com"
// console.log(User)

User.greetings = function () {
  console.log("Hello User")
}

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }
//const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4)

// console.log(Object.keys(User)) //return an array of keys
// console.log(Object.values(User))
// console.log(User.hasOwnProperty("email"))

// Destructuring

const course = {
  coursename: "js course",
  price: "999",
  courseInstructor: "asmit",
}

const { courseInstructor: instructor } = course
console.log(instructor)
