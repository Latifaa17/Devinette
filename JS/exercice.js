
function jouer() {
    var nb=Math.floor(Math.random() * 100) + 1;
    var test=false;
    var i=0;
    while(i<8 && !test)
    {
        var n = prompt("choisissez un entier:");
        if(n==nb)
            {
                console.log("bravo!");
                console.log("la réponse correcte est:"+n);
                console.log("vous avez gagné à la tentative numero "+(i+1));
                test=true;
            }
        else if(n<nb)
            {
                console.log("l'entier à chercher est plus grand que "+n);
                console.log("il vous reste "+(7-i)+" tentatives");
            }
        else 
        {
            console.log("l'entier à chercher est plus petit que "+n);
            console.log("il vous reste "+(7-i)+" tentatives");
        }
        i+=1;
    }
    if(!test)
    {
        console.log("vous avez perdu :( ");
        console.log("la réponse correcte est: "+nb);
    }
  }