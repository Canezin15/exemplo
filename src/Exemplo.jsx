
export function Exemplo( {lista} ){ 
    return (
        <div>
            {lista.map(aluno=>(
                <ul>
                    <li>{aluno.nome}, {aluno.idade}, {aluno.cidade}</li>
                </ul>
            ))}
        </div>
    );
}

