'use strict';

/* Follow the below instructions to use jQuery to create an interactive
   survey builder.
   Be sure and reference functions in the jQuery API for more details:
      
      http://api.jquery.com/
*/

/* First we'll use jQuery to create some DOM elements that make a nice form */

//Use the jQuery selector function $() to select the '#poll-options' element
var options = $('#poll-options');

//Use console.log to log out that variable (to show that everything works)
console.log(options);

//Use the jQuery selector function $() to create a new <input> element
//Remember to include the < > when specifying the new element to make!
var input = $('<input>');

//Use .append() to append your input element to the pollOptions element
options.append(input);

//Use .addClass() to add the 'form-control' class to your input
input.addClass('form-control');

//Use .attr() to set the following attributes of the input:
//  'type' :        'text'
//  'placeholder' : 'Your option here' 
//Try to do this with only a single function call!

input.attr({ //so put input becomes input.atrii(), now you have to do it in one function call so the curly braces goes inside the attribute() --> input.attr({ -put attributes in here})
'type':'text',
'placeholder': 'Your option here',

})

//Create a new <label> element with the HTML:
//  '<label class="input-group-addon"></label>'
//You can just use the $() function to specify the entire html String

var label = $('<label for="option1" class="input-group-addon"></label>');

//Use .text() to specify the text of the label: "1."
label.text('1.');

//Attach the label BEFORE the input
//Hint: see http://api.jquery.com/category/manipulation/dom-insertion-outside/

input.before(label);


//Surround ("wrap") both the <input> and the <label> with the element
//  '<div class="input-group">'
//Use the group selector (the comma ,) to select both elements with jQuery
//Hint: http://api.jquery.com/category/manipulation/dom-insertion-around/

$('input, label').wrapAll('<div class="input-group">');

/* Now we'll make it so you can add new inputs! */

//Select the '#addButton' and register an event listener that responds to clicks

$('#addbutton').click(function(event){


  //The following steps should occur when the button is clicked:

  //Select the '.input-group' element you made
var group = $('.input-group:first');

  //clone the element and append the copy to options
  //Use the .clone() method to dupliate that input-group element.
  //Then attach the duplicate to the '#poll-options' element
var copy = group.clone();
options.append(copy);

  //Note: If you find the number of options increasing exponentially 
  //on every click, make sure you only select the first '.input-group'
  //Use the ':first' pseudoclass (see: http://api.jquery.com/first-selector/)


  //Select all the 'input' elements on the screen, and get the .length
  //of the array. Log out that number, which is the number of options

 var numOfOptions = $('input').length;
 console.log(numOfOptions);
  //Select the 'label' element in the duplicate. Hint: use .children()

var newLabel = copy.children('label');

  //Set the text of this new label to be the number of options


  //Any values the user has typed in will be copied along with the 'input-group'
  //Select the duplicate's 'input' element and set it's value to be empty ''
  //Hint: use .val()


  //Extra: update `for` and `id` attributes



  /* Finally, we'll add a "remove" button to these new inputs (we can't remove
     the first option) */

  //Add the following elements(s) at the end of your new duplicate 'input-group'
  //  `<span class="input-group-btn">
  //     <button type="button" class="btn btn-danger">
  //       <span class="glyphicon glyphicon-remove" aria-label="Remove"></span>
  //     </button>
  //   </span>`
  //Note that you can use the backticks `` to make a multi-line String


  //Select that button you just created. Because the button is inside a <span>
  //you can't use .children(); try .find() instead


  //Add a click event listener to that remove button


    //The following steps should occur when the remove button is clicked:

    //Use jQuery to select the target of the event (event.target)


    //Select the target button's parent 'input-group' and remove it
    //See https://api.jquery.com/parents/ and https://api.jquery.com/remove/ 


    //Now that you've removed items, you'll need to re-number ALL the labels
    //Select all the 'label' elements and use the .text() function
    //Hint: Look at how this function can take a callback as a parameter
    //      http://api.jquery.com/text/#text-function








/*
Congratulations for getting this far! For an extra challenge:
Add the ability to move options down in the list. In effect, swap 
the input-group's location with the one below it.

Add the following html BEFORE the label to create a "move down" button
  `<span class="input-group-btn">
    <button type="button" class="btn btn-default">
      <span class="glyphicon glyphicon-remove" aria-label="Remove"></span>
    </button>
  </span>`

Add an event listener to this new button so that when clicked it:
  1. Selects the <input> of the clicked input-group, as well as the 
     <input> below it (separtely)
  2. Swaps the location of those two elements elements

*/
