

const number=[
    {name:'Mohammad Osman Goni',Roll:50},
    {name:'Aanmul haque',Roll:90},
    {name:'Sazib al hasan',Roll:20},
    {name:'Soumon sarkar',Roll:30},
    {name:'Tahsan Alom',Roll:10},
]

const SliceNumber=number.slice(2,number.length);

console.log(SliceNumber);

const spliceNumber=number.splice(2,3,{name:'Taskin sarkar',Roll:30});

console.log(spliceNumber);
console.log(number);