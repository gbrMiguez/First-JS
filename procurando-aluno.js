const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeNota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){
        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.` );
    } else {
        consolee.log("Aluno não encontrado!");
    }
}

exibeNomeNota("João");