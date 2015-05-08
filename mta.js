


$( document ).ready(function() {
 
    // Your code here.
 
//step 1 

//update the inputs as they are selected to reduce it down to 2


//take the class from the select and print it in a box somewhere to show the line, then get the value of that


//step 2 get all values on click

var currentline = 'string';
//deprecate currentline

var linelet = 'n';
var linelet2 = 'n';

$('#line1display').text('N - Line');
$('#line2display').text('N - Line');

//get starting line when station is selected

 $( "#startingstation" ).change(function() {

  

  console.log('linelet passed in and =' + linelet);
  console.log('current line passed in and =' + currentline);

  var stat = $('#startingstation').val();
  currentline = stat;
  console.log(currentline);
  
  
  linelet1 = stat.charAt(0); // alerts 's'
  linelet = linelet1;

  if( linelet==='n' ) {

    console.log('its n');
    $('#line1display').text('N - Line');
  };

  if( linelet==='l' ) {

    console.log('its l');
    $('#line1display').text('L - Line');
  };

   if( linelet==='s' ) {

    console.log('its l');
    $('#line1display').text('S - Line');
  };

});


console.log('linelet passed out and =' + linelet);
console.log('current line passed' + currentline);

// get end line from station selection for desination
  

$( "#destinationstation" ).change(function() {

  

  console.log('linelet2 passed in and =' + linelet2);
  console.log('current line passed in and =' + currentline);

  var stat = $('#destinationstation').val();
  currentline = stat;
  console.log(currentline);
  
  
  linelet1 = stat.charAt(0); // alerts 's'
  linelet2 = linelet1;

  if( linelet2==='n' ) {

    console.log('its n');
    $('#line2display').text('N - Line');
  };

  if( linelet2==='l' ) {

    console.log('its l');
    $('#line2display').text('L - Line');
  };

   if( linelet2==='s' ) {

    console.log('its l');
    $('#line2display').text('S - Line');
  };

});















  //calculate
  
$( "#button1" ).click(function() {
  console.log( "Handler for .click() called." );

  var mta = {
  'n': ['n-ts', 'n-34th', 'n-28th', 'n-23rd', 'n-us', 'n-8th'],
  'l': ['l-8th', 'l-6th', 'l-us', 'l-3rd', 'l-1st'],
  's': ['s-gc', 's-33rd', 's-28th', 's-23rd', 's-us', 's-ap']
};

function runprogram() {
  
    var userInput = getUserInput();
    var tripLength = calculateStops(userInput);
    alert('Your trip length is ' + tripLength + ' stops!');
  
}

function getUserInput() {
  var startTrain = linelet1;
  var firstStop = $('#startingstation').val();
  var stopTrain = linelet2;
  var lastStop = $('#destinationstation').val();
  return {startTrain: startTrain, 
          firstStop: firstStop,
          stopTrain: stopTrain,
          lastStop: lastStop};
}

function calculateStops(userInput) {
  return userInput.startTrain === userInput.stopTrain ? sameLine(userInput) : differentLines(userInput);
}

function differentLines(userInput) {
  var intersection = mta[userInput.startTrain].filter(function(stop) {
      return mta[userInput.stopTrain].indexOf(stop) != -1;
    })[0];

  var startTrainIndex = mta[userInput.startTrain].indexOf(userInput.firstStop);
  var startTrainIntersectionIndex = mta[userInput.startTrain].indexOf(intersection);
  var firstTripLength = Math.abs(startTrainIndex - startTrainIntersectionIndex);

  var stopTrainIndex = mta[userInput.stopTrain].indexOf(userInput.lastStop);
  var stopTrainIntersectionIndex = mta[userInput.stopTrain].indexOf(intersection);
  var lastTripLength = Math.abs(stopTrainIndex - stopTrainIntersectionIndex);

  return firstTripLength + lastTripLength;
}

function sameLine(userInput) {
  return Math.abs(mta[userInput.startTrain].indexOf(userInput.firstStop) - mta[userInput.stopTrain].indexOf(userInput.lastStop));
}

runprogram();
  
  

 
 
 
 
 
 
 

 });



//below is end docready?
});