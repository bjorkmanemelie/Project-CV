const btnHero = document.querySelector(".btn-hero");
btnHero.addEventListener("click", () => {
  btnHero.style.backgroundColor = "#e3dbb3";
  btnHero.style.color = "rgba(90, 90, 88, 0.9)";
});

const originalBgColor = "rgba(90, 90, 88, 0.9)";
const originalTextColor = "#e3dbb3";

btnHero.addEventListener("mouseleave", () => {
  btnHero.style.backgroundColor = originalBgColor;
  btnHero.style.color = originalTextColor;
});

// //grabbing this variable from the DOM
// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");

// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   //form validation
//   if (nameInput.value === "" || emailInput.value === "") {
//     //now i want to show a message to the user
//     msg.classList.add("error"); //adding a class to the msg element
//     msg.innerHTML = "Please enter all fields"; //adding text to the msg element

//     //want it to disappear after 3 seconds
//     setTimeout(() => msg.remove(), 3000); //removes the msg element after 3 seconds
//   } else {
//     //create a new list item
//     const li = document.createElement("li"); //creates a new list item
//     //add text node with input values
//     li.appendChild(
//       document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
//     ); //adds the name and email to the list item
//     //append to ul
//     userList.appendChild(li); //adds the list item to the user list

//     //clear the fields
//     nameInput.value = "";
//     emailInput.value = "";

//     //NEED NODE TO GET ALL THIS SAVED IN DATABASE
//     //CAN USE FIREBASE OR MONGODB
//   }
// }

// //single element

// //this selects the element with the id "my-form", = single element

// console.log(document.getElementById("my-form"));
// //or a newer way to do it
// console.log(document.querySelector("my-form")); //selects the first element that matches the css selector. so you can write like .container or #my-form as an ID.
// //also bossible to select by tag name like h1, p etc.

// //or sign it ta a variable

// // const myForm = document.getElementById("my-form");

// // console.log(myForm);

// // multiple elements
// console.log(document.querySelectorAll(".item")); //selects all elements that matches the css selector. so you can write like .container or #my-form as an ID.
// //its very similar to an array, its a node list.

// //LOOPING THROUGH A NODE LIST
// const items = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item)); //loops through each item in the node list and logs it to the console.

// const ul =document.querySelector(".items");

// // ul.remove(); //removes the entire ul element

// //now i want to get rid of the last item in the list
// // ul.lastElementChild.remove(); //removes the last item in the list

// ul.firstElementChild.textContent ="Hola"; //taking item from the dom and changing the text content
// ul.children[1].innerText = "Hello"; //taking item from the dom and changing the text content
// ul.lastElementChild.innerHTML = "<h1>Bye</h1>"; //taking item from the dom and changing the text content, can also add html elements

// //change some styles

// const btn = document.querySelector(".btn");
// btn.style.background = "red"; //changes the background color of the button to red

//EVENT LISTENERS
// const btn = document.querySelector(".btn"); //event

// btn.addEventListener("mouseover", (e) => { //this change when button been clicked., (e) event parameter.
//     e.preventDefault(); //prevents the default behavior of the button, which is to submit a form
//     document.querySelector("#my-form").style.background = "#ccc"; //changes the background color of the form to grey when the button is clicked
//     document.querySelector("body").classList.add("bg-dark"); //adds a class to the body element, which changes the background color to dark
//     // console.log(e.target.className); //logs the element that was clicked

// })
