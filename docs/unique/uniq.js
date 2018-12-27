 let myarray = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

let result = myarray.filter(function(value,index,array){
  return array.indexOf(value) == index;
});

document.write("The unique elements of an array are " + "<br>" + result.sort());