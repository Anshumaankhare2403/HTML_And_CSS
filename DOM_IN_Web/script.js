// // const dom = document.getElementsByClassName("Row");

// // for (let i = 0; i < dom.length; i++) {
// //     dom[i].style.background = "green";
// // }

// // let count = document.getElementById("count");
// // let a = 0;

// // function add() {
// //     a++;
// //     count.textContent = a;
// //     console.log(a)
// // }

// const div  = document.querySelector(".Row");
// div.innerHTML="Anshumaan";
// // for (let i = 0; i < 5; i++) {
// // }

// Login Forms
// let name = document.getElementById("name");
// let email = document.getElementById("email");
// let password = document.getElementById("password");

// console.log(name.value);
// console.log(email.value);
// console.log(password.value);

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const user = [];
// function signin(event) {

//     event.preventDefault();
//     if (!emailRegex.test(email.value)) {
//         console.log("Invalid email");
//         return;
//     }
//     if(password.value.length < 8){
//         console.log("password length");
//         return;
//     }
    

//     const data = {
//         name: name.value,
//         email: email.value,
//         password: password.value
//     };
//     user.push(data);
//     console.log(user)
// }


let change = document.getElementById("body");

// function colorchange(){
//     change.style.backgroundColor="green";
// }

change.addEventListener("click", () => {
    alert("Button clicked!");
    change.style.backgroundColor="green";
});

// const second = document.getElementById("second");

// console.log(second.parentElement);

// console.log(second.previousElementSibling);

// console.log(second.nextElementSibling);

// console.log(second.parentElement.children);

// console.log(second.parentElement.firstElementChild);

// console.log(second.parentElement.lastElementChild);