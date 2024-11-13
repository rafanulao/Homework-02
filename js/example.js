var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


/*  WRITE YOUR CODE BELOW */


// Part1. Hint: Use the listItems object to iterate through the elements of the list

for(var i = 0; i<totalItems; i++){
    if(listItems[i].innerHTML == "fresh figs" || listItems[i].innerHTML == "kale" || listItems[i].innerHTML ==  "honey"){
        listItems[i].className = 'cool';
    }
}

// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list

heading.innerHTML = newHeading;




