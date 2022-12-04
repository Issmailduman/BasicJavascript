//object is collection of properties

let person= {
    firstName: 'Alex',
    lastName:'deSouza',
    age:10,
    fullname: function(){
        console.log(this.firstName+this.lastName)//we can concatenate with 'this', keyword
    }
}
console.log(person.fullname())
console.log(person.firstName) // Alex
console.log(person['lastName']) 
person.firstName= 'Yusuf' // you can reassigned
console.log(person.firstName) // yusuf
person.gender='male' // you can create a new feature
console.log(person) 
delete person.gender
console.log(person)

console.log('gender' in person)// boolean true or false check to in a object consist of gender

//print all the values of the javascript object
for(let key in person){
    console.log(person[key])
}
