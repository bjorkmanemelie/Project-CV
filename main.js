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

