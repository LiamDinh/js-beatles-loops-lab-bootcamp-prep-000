// add solution here

function theBeatlesPlay(arrMusicians, arrInstru) {
  var array = []
  for (var i = 0; i < arrMusicians.length; i++) {
    array.push(`${arrMusicians[i]} plays ${arrInstru[i]}`)
  }
  return array 
}

function johnLennonFacts(array){
  for(var i = 0; i < array.length; i++) {
    array[i] = `${array[i]}!!!`
  }
  return array 
}

function iLoveTheBeatles(n) {
  var array = []
  let i = parseInt(n)
  do {
    array.push("I love the Beatles!")
    i--
  }
  while(i < 15)
}