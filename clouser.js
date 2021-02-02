
function showof()
{
    let count=0;
    console.log(count)
   return function ()
    {
        console.log('f'+count);
        return count++;
    }
}

const watch1=showof();
console.log("x "+ watch1());
console.log("x "+watch1());
console.log("x "+watch1());
console.log("x "+watch1());

const watch2=showof();
console.log("x "+ watch2());
console.log("x "+watch2());

console.log("x "+watch1());
