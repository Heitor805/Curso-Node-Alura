import fs from 'fs';

import chalk from 'chalk';

// Código síncrono: é um código executado em sequência, sendo executado linha por linha, uma parte funciona então outra, então outra, etc...
// Código assíncrono: é um código q mantém multiplas partes em execução constante, não espera resultados para continuar computando

function trataerro (erro) {
    console.log(erro)

    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));

}

function pegaarquivo(caminhodoarquivo) {
    const encoding = "utf-8"
    fs.promises.readfile(caminhodoarquivo, encoding)
    // promises é sempre para código assincronos, "prometendo" responder
        .then((texto) => console.log(chalk.green(texto)))
        // serve para encadear um código assincrono, o código executa uma parte e então continua com outro, no caso ak em caso de erro o .then irá mostrar oq deveria ser feito se nenhum erro acontecer, ak está passando o texto pq é o q deveria acontecer normalmente e caso ocorra o erro no .then ele passa para o .catch, é uma forma de encadear códigos para continuamente operar
        .catch(trataerro)
        // serve para encadear um código assincrono, o código executa uma parte e então continua com outro
        // o javascript já passa o objeto erro na função trataerro automáticamente
}
// function pegaarquivo(caminhodoarquivo) {
//     const encoding = "utf-8"
//     fs.readFile(caminhodoarquivo, encoding, (erro, texto) => {
 
//         if (erro) {
//             trataerro(erro);
//         } else {
//         console.log(chalk.green(texto));
//         }
//     })

// }

pegaarquivo('./arquivos/');