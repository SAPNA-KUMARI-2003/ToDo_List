// let todolistarray = [];

// let items = document.querySelector(".input");
// let main = document.querySelector(".main")

// document.querySelector(".addItem").addEventListener("click", () => {
//     main.innerHTML = main.innerHTML + `<div class="itemList">
//                 <div class="moreItems">
//                 <li>${items.value}</li>
//                 </div>
//                 <button class="delete">Delete</button>
//             </div>`;

// todolistarray.push(items)
// console.log(todolistarray.push(items))

//     localStorage.setItem("myToDoList", todolistarray)
// })

// document.querySelector(".delete").addEventListener("click", () => {

// })

let inputValue = document.querySelector(".input");
let addItem = document.querySelector(".addItem");
let main = document.querySelector(".main");

const addItemsInToDoList = () => {
    //add items
}
let itemInArray = [];

let addItemToLocalStorage = () => {
    itemInArray.push(inputValue.value);
    return itemInArray;
}
addItem.addEventListener("click", () => {
    main.innerHTML = main.innerHTML + `<div class="itemList">
                <div class="moreItems">
                    <li>${inputValue.value}</li>
                </div>
                <button class="delete">Delete</button>
                </div>`
    console.log(addItemToLocalStorage());
})
 



