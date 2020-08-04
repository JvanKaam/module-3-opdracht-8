/* 
loop van 0 tot 10.
eerst tafel van 9.
console.log( y ' x ' num ' = ' result)


    WHILE
let num = 9;
let y = 0;

while ( y <= 10 ) {
    let result = y * num;
    console.log (y + ' x ' + num + ' = ' + result);
    y++;
}

    FOR 
let num = 9;

for (y=0; y <= 10; y++) {
    let result = y * num;
    console.log (y + ' x ' + num + ' = ' + result);
}


    BONUS
nesten

the num variable moet ook in een while loop. 
Die moet bovenaan omdat die veranderd per while loop. 


let num = 0;
let y = 0;

while (num <= 10) {
    while ( y <= 10 ) {
    let result = y * num;
    console.log (y + ' x ' + num + ' = ' + result);
    y++;
}
    let y = 0;
    num++;
}


nu is het dat num niet verder gaat dan 0. ik heb num++ erin staan. maar niet op de goede plaats maybe? 
de loop zegt dat ie al klaar is. ookal heb ik staan while num <= 10. 
also y blijft nu nog steeds 0. 
maybe al in een for loop schrijven. 
lets convert the first one first. 


*/




for (num = 0; num <= 10; num++) {
    for (y=0; y <= 10; y++) {
        let result = y * num;
        console.log (y + ' x ' + num + ' = ' + result);
    }
}

