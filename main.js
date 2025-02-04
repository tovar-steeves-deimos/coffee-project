"use strict"
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


function renderCoffee(coffee) {
    var html = '<div class=" col-5 coffee card">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h4>' + coffee.name + '</h4>';
    html += '<h6>' + coffee.roast + '</h6>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    console.log(coffees);
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    // tbody.innerHTML = '';
    var filteredCoffees = [];
    var selectedRoast = roastSelection.value;
    // var search  = coffeeName.value;
    console.log(selectedRoast);


    //adding in the all to the dropdown
    if(selectedRoast.toLowerCase() === "all"){
        filteredCoffees = coffees
    } else{
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast.toLowerCase()){
                console.log("in the else ");
                console.log(coffee.roast);
                filteredCoffees.push(coffee);
            }
        });
    }

    console.log("Filtered Coffees");
    tbody.innerHTML = renderCoffees(filteredCoffees);
    console.log(filteredCoffees);
}

//this is a new function I'm making to try and add coffee to the page//

function addCoffee(e){
    e.preventDefault();

    var coffeeObject= {
        id: "",
        name: "",
        roast: ""
    }

    coffeeObject.id = coffees.length + 1;

    //these need to be changed so that they grab the value of the input submissions
    coffeeObject.name = coffeeName.value;
    coffeeObject.roast = enter.value;

    coffees.push(coffeeObject);
    updateCoffees();
}


//function to search for a coffee
function searchCoffee(e) {
    e.preventDefault();
    var filteredCoffees = [];
    var search = coffeeName.value;
    console.log(search);

    coffees.forEach(function (coffee) {
        //turn input into lowercase
        if (coffee.name.toLowerCase() === search.toLowerCase()){
            filteredCoffees.push(coffee);
        }
    });
    //display the updated coffees
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
//added the search to coffee name//
var coffeeName = document.querySelector("#coffee-name");
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

// keyup event listener searches while you type//
coffeeName.addEventListener('keyup', searchCoffee);
