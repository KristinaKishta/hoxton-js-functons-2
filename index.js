let userLetter = prompt(`Enter the letter`)

const foundUser = users.filter(function (user) {
    return user.name.includes(userLetter)
})

let userIndex = 0
if (foundUser.length > 0) {
    const intervalId = setInterval(function () {
        const user = foundUser[userIndex]
        console.log(`Hi, ${user.name}`)
        userIndex += 1
        if (userIndex === foundUser.length) clearInterval(intervalId)
    }, 2000)
} else {
    console.log('Found no users...')
}

let userIdInput = Number(prompt("Enter the user Id"))

let listOfIncompletedTodos = todos.filter(function(todo) {
    return todo.userId === userIdInput 
}).filter(function (todo) {
    if (todo.completed) return false
    return true
}).map(function (todo) {
    return todo.title 
})

function printIncompletedTodos () {
    for (incompletedTodo of listOfIncompletedTodos)
    console.log(`To do: ${incompletedTodo}\n`)
}

printIncompletedTodos()

// Chellange
let userInputEmail = prompt("Enter 'email' to see a list of users name and emails")

let nameAndEmail = users.filter(function(user) {
    return 'email' === userInputEmail 
}).map(function (user) {
    console.log( `${user.name} - ${user.email}`)
})