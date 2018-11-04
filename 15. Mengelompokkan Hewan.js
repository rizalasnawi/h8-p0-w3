function groupAnimals(animals) {
  // you can only write your code here!
  //animals.sort();
  
  for(var i=0; i<animals.length;i++){
      for(var j=0;j<animals.length;j++){
          if(animals[j] > animals[j+1]){
              var temp=animals[j];
              animals[j]=animals[j+1];
              animals[j+1]=temp;
          }
      }
  }

//console.log(animals);

  var tampung=[];
  var hasilAkhir=[];

  //console.log(animals.sort());
  var animalsAwal=animals[0][0];
  
  for(var i=0; i<animals.length; i++){
      //console.log(animals[i][0]);
      if(animals[i][0] === animalsAwal){
        tampung.push(animals[i])
      }
      else{
          hasilAkhir.push(tampung); //console.log(hasilAkhir);console.log('\n');
          tampung=[];
          animalsAwal=animals[i][0];
          tampung.push(animals[i]);
      }
     // console.log(animals);
    if(i === animals.length-1){
       hasilAkhir.push(tampung);
    
   }
    }
    return hasilAkhir;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
 //[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
 //[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]