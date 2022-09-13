//bai1
let x = parseInt(prompt('số bé'));
let y = parseInt(prompt('số lớn'));
let c = x;
let arr = [3,4,5,6,7,8,9,10];
let songto = [];
for (let i = 0; i <= (y - x); i++){
    arr.push[c];
    c++                            
}
function check() {    
   function checksongto(n) {    
        let giatri = 1;   
        if (n < 2){ 
           return giatri = 0;
        }
        else{
            let i = 2;
            while (i < n){
                if(n%i==0) {
                    giatri = 0;
                    break;
               }
                i++;
            }
       }
        return giatri;
    }
    if (x < y) {       
        for (let i = 0; i < arr.length; i++){
                if (checksongto(arr[i]) == 1) {
                    songto.push(arr[i])
                }
        }
        console.log(songto);
    }
    else{
        check()
    }
}
check()

//bai2
function numberOneTriangle(num) {
    let str = ``;
    for (let i = 1; i <= num; i++){
        for(let j=1; j <=i; j++){
            str += `* `;
        }
        str += '\n';
    }
}


