const addList = document.getElementById('btn');
const item = document.getElementById('inputitem');
const shoppingList = document.querySelector('.listitems');
// const quantity = document.querySelector('.quantity');
// const unitPrice = document.querySelector('.unit-price');
// const total = document.querySelector('.total');
// const grandTotal = document.querySelector('.grand-total');


addList.addEventListener('click', ()=>{
    const orderedList = document.createElement('li');

    orderedList.classList.add('list-style');
    orderedList.innerText=item.value;
    if(item.value!=""){
    shoppingList.appendChild(orderedList);
    // unitPrice.appendChild();
    // total.appendChild();
    // grandTotal.appendChild();
}
    item.value="";
    console.log(item);
    // orderedList.addEventListener("dbclick",()=>{
    //     shoppingList.removedChild(orderedList);
    // })
})