function iterativeLog(array) {
  array.forEach(iterator => {
    console.log(`${index}:${element}`)
  })
}

function iterate(callback) {

  var myArray = [ 'apple', 'mango', 'banana' ];

  myArray.forEach(callback);
  return myArray;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
