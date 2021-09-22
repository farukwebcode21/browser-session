const displayLocalStorageCart = ()=>{
    const cart = getCart();
    for(const name in cart){
        displayProduct(name);
    }
}
const addItem =()=>{
    const productName = document.getElementById('product-name');
    const name = productName.value ;
    if(!name){
        return;
    }
    // Display in the ui
    displayProduct(name);

    // Add to local storage
    addProductToCart(name);

    
    productName.value = '';
}
const displayProduct = name =>{
    const ul = document.getElementById('products');
    const li = document.createElement('ol');
    li.innerText = name;
    ul.appendChild(li);

}

const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartObject
    if(cart){
        cartObject = JSON.parse(cart);
    }else{
        cartObject ={};
    }
    return cartObject;
}
const addProductToCart = name =>{
    const cart = getCart();
    // cart[name] = 1;
    if(cart[name]){
        cart[name] = cart[name]+1;
    }else{
        cart[name] =1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    console.log(cart);
    
}
const placeOrder =() =>{
    document.getElementById('products').textContent ='';
    localStorage.removeItem('cart');
}

displayLocalStorageCart();