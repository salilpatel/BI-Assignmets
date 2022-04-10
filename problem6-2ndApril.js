//6.looping statements print numbers divisible by 5 and 3 in the range 0 to 100

/*for(let i=0;i<=100;i++)
{
    if(i%15 == 0)
    {
        console.log(i)
    }
}*/


let i = 0;
while(i<=100)
{
    if(i%3 == 0 && i%5 ==0)
    {
        console.log(i)
    }
    i++
}