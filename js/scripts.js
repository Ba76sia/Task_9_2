var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jadzia'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Marian'
if (allNames.indexOf(newName) === -1) {
    var x = allNames.push('Marian');
}else {
    console.log ('Nie można dodać, imię już istnieje');
}