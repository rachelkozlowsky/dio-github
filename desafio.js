function calcularNivelRankeado(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    switch (true) {
        case (vitorias < 10):
            nivel = 'Ferro';
            break;
        case (vitorias >= 11 && vitorias <= 20):
            nivel = 'Bronze';
            break;
        case (vitorias >= 21 && vitorias <= 50):
            nivel = 'Prata';
            break;
        case (vitorias >= 51 && vitorias <= 80):
            nivel = 'Ouro';
            break;
        case (vitorias >= 81 && vitorias <= 90):
            nivel = 'Diamante';
            break;
        case (vitorias >= 91 && vitorias <= 100):
            nivel = 'Lendário';
            break;
        case (vitorias >= 101):
            nivel = 'Imortal';
            break;
        default:
            nivel = 'Indeterminado'; // Caso nenhuma condição seja atendida
            break;
    }

    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
const vitorias = parseInt(gets()); // Substitua `gets()` pela entrada real de vitórias
const derrotas = parseInt(gets()); // Substitua `gets()` pela entrada real de derrotas

const resultado = calcularNivelRankeado(vitorias, derrotas);
print(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
