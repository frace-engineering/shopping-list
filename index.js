const addList = document.getElementById('btn');
const item = document.getElementById('inputitem');
const shoppingList = document.getElementById('list');


addList.addEventListener('click', ()=>{
    const orderedList = document.createElement('li');
    orderedList.classList.add('list-style');
    orderedList.innerText=item.value;
    if(item.value!=""){
    shoppingList.appendChild(orderedList);}
    item.value="";
    console.log(item);
    orderedList.addEventListener("dbclick",()=>{
        shoppingList.removedChild(orderedList);
    })
})