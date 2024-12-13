const nome = process.argv[2]
const cognome = process.argv[3]

console.log(getFullName(nome, cognome))

function getFullName(firstName, lastName){
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
  return firstName + " " + lastName
}