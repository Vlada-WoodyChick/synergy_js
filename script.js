let num = 5;
if(num % 2) {
    document.write('odd');
    document.write('<br>');
}else{
    document.write('even');
    document.write('<br>'); 
}
num = 6;
if(num % 2) {
    document.write('odd');
    document.write('<br>');
}else{
    document.write('even');
    document.write('<br>'); 
}

const evenOrOdd =(num) => {
    num % 2 ?  document.write('number odd')  : document.write('number even');
    document.write('<br>'); 
}

evenOrOdd(6);
evenOrOdd(7);


const countWhile = (num) => {
    while(num > 0 && num < 10 ) {
        document.write(num);
        document.write('<br>'); 
        num++;
        
}
    }

    countWhile(2);
    document.write('<br>'); 
    countWhile(0);
    document.write('<br>'); 
    document.write('<br> <br>'); 

const countDoWhile =(num) => {
    do{
        document.write(num)
        num++;
        document.write('<br>'); 
    }while(num > 0 && num < 10)
    document.write('<br> <br>'); 
}
countDoWhile(20);
document.write('<br>'); 
countDoWhile(0);
document.write('<br>'); 
countDoWhile(-1);
document.write('<br>'); 
countDoWhile(5);
document.write('<br> <br>'); 

for(i = 0; i <= 4; i++) {
    document.write(`i = ${i}`); 
    document.write('<br>');  
}
document.write('<br> <br>'); 

for(i = 0; i <= 8; i++) {
    document.write(`i = ${i}`); 
    document.write('<br>'); 
    if(i === 5) break;
}  
document.write('<br> <br>');
for(i = 0; i <= 8; i++) {
    if(i % 2)  continue //четные
    document.write(`i = ${i}`); 
    document.write('<br>'); 
}  

document.write('<br> <br>');
for(i = 0; i <= 8; i++) {
    if(!(i % 2))  continue //нечетные
    document.write(`i = ${i}`); 
    document.write('<br>'); 
} 


