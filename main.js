
// Start out by creating a <div> with JQuery
let myDiv = $('<div></div>');

// Set the text of the <div> to be Click Here
myDiv.text('Click Here');

// Add the <div> to the body of your document using jquery
let body = $('body');
body.append(myDiv);

// // In the HTML, add an <input> element in the body and give it an id
// let input = $('<input type="text" id="myInput"></input>').appendTo(body);
let input = $('#myInput');

// Add a <ul> to the body of your document using jquery
let ul = $('<ul></ul>').appendTo(body);

// Add a click listener on the <div> that takes in the text in the input box added earlier and add it to the <ul>
myDiv.on('click', createNewLi);

let bootButton = $('#bootstrap-button');
bootButton.on('click', createNewLi);


function createNewLi(){
    $(`<li>${input.val()}</li>`).appendTo(ul);
    input.val('');
    console.log('Div Cliked!');
    console.log(input.val());
}