export default function Exercicio4({base,altura})
{
    let area;
    area=(Number(base)*Number(altura))/2;
    return(
        <div>
           A área do triangulo é {area}; 
        </div>
    )
}