const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let nota of notas){
    somaDasNotas += nota;
}

const mediaa = somaDasNotas / notas.length

console.log(`À média das notas é ${media}.`);