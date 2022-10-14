console.log("users: ", window.users);

console.log("todos: ", window.todos);

//Prompt the user for a letter
let userLetter = prompt(`Enter the letter!`)

//find all users who's name contains the letter
let foundUser = users.filter(function (user) {
    return user.name.includes(userLetter)
})

//Say Hi to those users in the console- but only 1 greeting every 2 seconds
let userIndex = 0
if (foundUser.length > 0) {
    const intervalId = setInterval(function () {
       const user = foundUser[userIndex]
       console.log(`Hi, ${user.name}`)
        userIndex += 1
        if (userIndex === foundUser.length) clearInterval(intervalId)
    }, 2000)
    } else {
        console.log(`Found no users...`)
    }

//Prompt the user ID. Using the value, find all the todos that are incomplete and console.log them.    
let userIdInput = Number(prompt("Enter the user Id"))

let listOfIncompletedTodos = todos.filter(function(todo) {
    return todo.userId === userIdInput
}).filter(function (todo) {
    if (todo.completed) return false
        
    return true
}).map(function(todo) {
    return todo.title
}) 

let incompletedTodo 
function printIncompletedTodos () {
    for (incompletedTodo of listOfIncompletedTodos) 
    console.log(`To do: ${incompletedTodo}\n`)    
}

printIncompletedTodos()


// Challange
//Prompt the user to enter a property(e.g 'email' or 'address') and then console.log a list of name-given property.
let userInputEmail = prompt("Enter 'email' to see a list of users name and emails")

let nameAndEmail = users.filter(function(user) {
    return 'email' === userInputEmail 
}).map(function (user) {
    console.log( `${user.name} - ${user.email}`)
})