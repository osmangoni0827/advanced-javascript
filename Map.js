
const Number=[5,2,14,8,7,9];
const Object=[
    {Name:'Mohammad Osman Goni',Age:25},
    {Name:'Taskin Ahmed',Age:22},
    {Name:'Samim Khondokar',Age:15}
]

// For Loop 
for(let i=0;i<Number.length;i++)
{
    const element=Number[i];
    console.log(element);
}

function sembol(element)
{
    console.log(element*element);
}
// Acces Array use Map;
const result= Number.map (element=>element>4);
console.log(result);

const result2=Number.filter(element=>element>10);

console.log(result2);


const List=Object.map(element=>element.Age);
const filterList=Object.filter(element=>element.Age>20);
console.log(filterList);
filterList.map(element=>console.log(element.Age));
