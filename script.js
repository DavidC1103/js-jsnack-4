let studenti = [

    {
        id : 213,
        name : 'Marco della Rovere',
        voto: 78,
    },
    {
        id : 110,
        name : 'Paola Cortellessa',
        voto: 96,
    },
    {
        id : 250,
        name : 'Andrea Mantegna',
        voto: 48,
    },
    {
        id : 145,
        name : 'Gaia Borromini',
        voto: 74,
    },
    {
        id : 196,
        name : 'Luigi Grimaldello',
        voto: 68,
    },
    {
        id : 102,
        name : 'Piero della Francesca',
        voto: 50,
    },
    {
        id : 120,
        name : 'Francesca da Polenta',
        voto: 84,
    },

]


let upCaStudenti = []
let votiOver70 = []
let id120over70 = []


studenti.map((studente) =>{
    let nameStd = studente.name.toUpperCase()
    upCaStudenti.push(nameStd)

    if(studente.voto > 70){
        votiOver70.push(studente)
    }
    if(studente.voto > 70 && studente.id > 120){
        id120over70.push(studente)
    }
})
console.log(id120over70);
console.log(votiOver70);
console.log(upCaStudenti);





