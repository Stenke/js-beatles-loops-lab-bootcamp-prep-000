// add solution here
function theBeatlesPlay(arrayMusician, arrayInstrument) {
  var array = [];
  for ( i = 0; i < arrayMusician.length; i++) {
    array.push(arrayMusician[i] + " plays " + arrayInstrument[i]);
  }
  return array;
}