let pets = ['cat', 'dog', 'monkey']

/* 

for (let i = 0; i < pets.length; i++) {
        pets[i] = pets[i] + 's'
} 

*/

pets = pets.map(item => item + 's')
console.log(pets);