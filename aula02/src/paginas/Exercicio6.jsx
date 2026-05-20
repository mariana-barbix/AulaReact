export default function Exercicio5({capital, juros, tempo})
{
    let m, m1;
    m = Number(capital) * (1 + (Number(juros)/100) * Number(tempo));
    m1 = Number(capital) * (1 + Number(juros)/100)**Number(tempo);
    return(
        <div>
           O juros simples é {m} e o juros composto é {m1};
        </div>
    )
}