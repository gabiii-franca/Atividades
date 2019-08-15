// 1. Mostrar a idade dos usuarios
const data = require("./data"); 
const novoAge = data.map(data => `${data.age}`);
console.table(novoAge);

//2 Mostrar mulheres com idade maior que 18
const genderFemale = data.filter(data => data.gender.includes('female') && data.age >=18);
console.log(genderFemale);

//3 Procurar um usuario da cidade Monroe
var found = data.find(data => data.city==="monroe"); 
console.table(found);

//4 Idade maior que 50
for (var x = 0; x <= data.length; x++) {
const idade= data.age[x]*2;
if (idade<=50)
{
  console.table(idade);
}
else{}
}

