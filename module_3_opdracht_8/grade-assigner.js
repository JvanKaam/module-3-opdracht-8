/* 
gekregen code:


function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log welke grade je krijgt vanaf 60 tot 100 punten.

"voor 'score' punten, krijg je een 'grade' "


moet de functie los?
moet de functie in de for loop?
moet de for loop in de functie?


Console.log vervolgens: "Voor 91 punten, krijg je een A". 


*/

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (score=60 ; score <= 100; score++) {
    console.log('voor ' + score + ' punten, krijg je een ' + assignGrade(score) );
}

