/*
function angkaPalindrome(num) {

    while (true) {
        num++;
        var numbaru = "";
        numbaru += num;
        var numbalik = numbaru.split("").reverse().join("")
        if (numbaru === numbalik){
            return num;
        }
    
    }
}
*/
function angkaPalindrome(num){

    while(true){
        num++;

        var str=String(num);
        var balik="";

        for (let i = str.length-1 ; i >=0 ; i--){
            balik+= str[i];
        }

        if(balik==num){
            return num;
        }

    }

}
console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));