function SetUserName(username) {
  this.username = username
}

function createUser(username, email, password) {
  SetUserName.call(this, username)
  /* Holding the reference of the function by using call because after executing 
     this functions execution context get removed from call stack 
     and we lose the value which we wanted to set.
     Also we are passing `this` (Current Context of this createUser funciton)
     as arguement to the SetUserName 
     */

  this.email = email
  this.password = password
}

const chai = new createUser("chai", "chai@gmail.com", "123")
console.log(chai)
