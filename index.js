// Code your solutions in this file

function writeCards(array, occasion) { 
    const new_array = [] 
    for (let i = 0; i < array.length; i++) {
        new_array.push(`Thank you, ${array[i]}, for the wonderful ${occasion} gift!`);
    }
    return new_array;
}


function countDown(int) {
    while (int > -1 ) {
        console.log(int);
        --int;
    }
}