
function jouer() {
    var choix=1;
    while(choix==1)
    {
        var nb=Math.floor(Math.random() * 100) + 1;
        var test=false;
        var i=0;
        do
        { 
            var n = Number(prompt("choisissez un entier:"));
            if(!isNaN(n))
            {
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
        }while(i<8 && !test)
        if(!test)
        {
            console.log("vous avez perdu :( ");
            console.log("la réponse correcte est: "+nb);
        }
        choix=prompt("Voulez-vous rejouer? 1:oui 2:non");
    }
  }