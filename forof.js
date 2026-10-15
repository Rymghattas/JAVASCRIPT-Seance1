const fruitsRouges = ['fraise', 'cerise', 'framboise'];

for(let fruit of fruitsRouges){
    console.log(`la ${fruit} c'est bon !`);
}

fruitsRouges.forEach((fruit)=>{
    console.log(`la ${fruit} c'est bon !`);
}
)
const nombres = [12,3,4,10];
let doubles=nombres.map(n=>n*2);
console.log(doubles);
let d2=nombres.forEach(n=>console.log(n*2));
let paires=nombres.filter(n=>n%2==0);
console.log(paires);