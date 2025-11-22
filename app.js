let firstName = "John";
let lastName = "Doe";

console.log(`Hello, ${firstName} ${lastName}!`);

console.log(`Welcome to the application, ${firstName}.`);

function getFullName() {
    return `${firstName} ${lastName}`;
}

console.log(`User's full name is: ${getFullName()}`);


console.log(`Goodbye, ${firstName} ${lastName}!`);

export { firstName, lastName, getFullName };