const Elevator = require('./elevator.js');

let elevator = new Elevator();
let person = new Person();

//Recomiendo q en el index.js hagais un array de N personas y llameis N veces al call
//La primera posición del array de requests determina hacia que planta debe ir el ascensor! Y tendra q pararse en las plantas q le hayan llamado x el camino (x ejemplo) para recoger personas y dejar
//Pero luego las personas van llamando a call segun pasa el tiempo
//Para darle mas vidilla podéis hacer que cada X segundos una persona aleatoria llame al ascensor, para los mas hackers
//Primer reto: que Manolita llame al ascensor en la planta 4 y cuando se monte diga q quiere ir a la 10
//El ascensor tendra q ir a la 4 y luego a la 10
//Luego tendra que quedarse en la 10 o bajar al 0 (según vuestro plan de ahorro energético)


persons = [Maria, Luis, Iñigo, Paloma, Iñaki];


elevator.log();
elevator.update();
elevator.floorDown();
elevator.log();
