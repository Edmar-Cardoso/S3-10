function positions(firstPlace, secondPlace, lastPlace) {
    if(firstPlace == competidores[0] && secondPlace == competidores[1] && lastPlace == competidores[2] ) {
        return console.log(`1º Colocado - ${competidores[1]} `), 
            console.log(`2º Colocado - ${competidores[0]} `),
            console.log(`3º Colocado - ${competidores[2]} `);
    };
};

let competidores = [
    "Manoel",
    "Daniel",
    "Rafael"
];

//positions("Manoel", "Daniel", "Rafael");