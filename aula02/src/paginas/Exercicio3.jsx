export default function Exercicio3({nota1, nota2})
{
    let media;
    media=(nota1+nota2)/2;

    if(media >=6){
      
        return(
            <div>
                APROVADO
                
            </div>
        )
    }
    else{
        return(
            <div>
               REPROVADO 
            </div>
        )
    }
    
}