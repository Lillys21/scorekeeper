var scores = {}; // Va allevar el registro de los jugadores y sus puntos
console.log(scores);
//
function createPlayer(object, name){
    object[name.toLowerCase()] = 0; // creamos el objeto [name] que es scores, inicializado en 0
    console.log(scores);
}

function addPoints(name, points){
    scores[name.toLowerCase()] += points; // y a el score[name] le das un puntaje
    console.log(scores);
}

function printAllPoints(){
var arrayPlayers = Object.keys(scores);
var resultados = "";
    for(var i=0; i< arrayPlayers.length; i++){ // [variacion i++]
        if(i === arrayPlayers.length -1 ){ // el index es tamaño menos -1, Se verifica que estemos en el ultimo index
        resultados += arrayPlayers[i] + ": " + scores[arrayPlayers[i]]; // para quitar la coma que separa los elementos
    } else {
        resultados += arrayPlayers[i] + ": " + scores[arrayPlayers[i]] + ", ";// si no es el ultimo index si se deja la coma
    }
}
    return resultados;
}

createPlayer(scores, "Ana");
addPoints("ana", 20);
addPoints("ana", 40);
createPlayer(scores, "Silvana");
addPoints("silvana", 50);
printAllPoints();
console.log(printAllPoints());
createPlayer(scores, "Ana");
addPoints("ana", 20);
addPoints("ana", 40);

createPlayer(scores, "Silvana");
addPoints("silvana", 50);

console.log(printAllPoints());
