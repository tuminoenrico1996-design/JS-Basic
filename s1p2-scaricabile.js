/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
I datatype sono i diversi tipi di informazioni
che possiamo utilizzare in JavaScript.

String: serve per scrivere parole o frasi,
come "Ciao" oppure "Enrico".

Number: serve per rappresentare numeri,
come 10, 25 oppure 3.5.

Boolean: può avere solo due valori:
true (vero) oppure false (falso).

Undefined: indica che una variabile non ha
ancora ricevuto un valore.

Null: indica che vogliamo lasciare
intenzionalmente un valore vuoto.

BigInt: serve per rappresentare numeri
interi molto grandi.

Symbol: serve per creare valori unici.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*
Un oggetto in JavaScript è un contenitore
che permette di raggruppare più informazioni
collegate tra loro.

Per esempio, possiamo creare un oggetto
che rappresenta una persona e contiene
il suo nome, la sua età e la sua città.

Ogni informazione ha un nome (proprietà)
e un valore.
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Enrico";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2);

console.log(name1.toLowerCase() === name2.toLowerCase());
