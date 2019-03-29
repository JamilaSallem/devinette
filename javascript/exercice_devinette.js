var n=Math.floor(Math.random()*100)+1;
var rep=0;
do
{
    var x=Number(prompt("Donnez un entier: "));
    if(!isNaN(x))
    {
        if(x==n)
        {
            console.log("Bravo!");
        }
        
        else if (x>n)
        {
            console.log("Le nombre que vous avez saisi est supérieur au nombre à deviner");
        }
        else
        {
            console.log("Le nombre que vous avez saisi est inférieur au nombre à deviner");
        }
    }
    else
    {
        console.log("Réessayer!")
    }

}while((x!=n)&&(rep<8));