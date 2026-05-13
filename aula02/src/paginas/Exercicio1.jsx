export default function Exercicio1({fanhe})
{
    let celcius;
    celcius=(Number(fanhe)-32)*5/9;
    return(
        <div>
            A temperatura {fanhe} é {celcius} em celcius 
        </div>
    )
}