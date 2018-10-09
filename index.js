// add solution here

function theBeatlesPlay(arrMusicians, arrInstru) {
  var array = []
  for (var i = 0; i < arrMusicians.length; i++) {
    array.push(`${arrMusicians[i]} plays ${arrInstru[i]}`)
  }
  return array 
}