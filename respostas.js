// 1. Mostrar a idade dos usuarios
const { data } = require("./data"); 
const novoAge = data.map(data => `${data.age}`);
console.table(novoAge);

//2 Mostrar mulheres com idade maior que 18
const { data } = require("./data");
const genderFemale = data.filter( data.gender.female>=18);

//3 Procurar um usuario da cidade Monroe
const { data } = require("./data");
var found = data.find(data.city===Monroe); 
console.table(found);

//4 Idade maior que 50
const { data } = require("./data");
const vetor;
for (vetor = 0; vetor < data.length; vetor++) {
const idade= vetor*2;
if (idade<=50)
{
  console.table(idade);
}
else{}
}

