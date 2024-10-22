let listSpace = document.querySelector('#cart_list_space') ;
let itemInput = document.querySelector('#item_input') ;
let priceInput = document.querySelector('#price_input') ;
let imgUrlInput = document.querySelector('#img_url_input') ;
let addToCartBtn = document.querySelector('#add_to_cart_Btn') ;

let totalPriceBox = document.querySelector('#total_price_box');
let totalPrice = 0; 

addToCartBtn.onclick = function() {
    let myItem = itemInput.value.trim() ;
    if (myItem) {
        itemInput.value = '' ;
    } else {
        alert('Please fill in the information') ;
    }

    let myPrice = priceInput.value.trim() ;
    if (myPrice) {
        priceInput.value = '' ;
    } else {
        alert('Please fill in the price') ;
    }

    let listItem = document.createElement('li') ;
    let listText = document.createElement('span') ;
    let listPrice = document.createElement('span') ;
    let listImg = document.createElement('img') ;
    let deleteBtn = document.createElement('button') ;

    let checkBox = document.createElement('input') ;
    checkBox.type = 'checkbox'
    checkBox.id = 'myCheckbox'

    let myImgUrl = imgUrlInput.value.trim() ;
    if (myImgUrl) {
        imgUrlInput.value = '' ;
        listImg.src = myImgUrl ;
        listImg.style.width = '150px' ;
        listImg.style.height = '150px' ;
        listImg.style.objectFit = 'cover' ;
    } else {
        alert('Please fill in image URL')
    }

    
    listItem.appendChild(checkBox)
    listItem.appendChild(listImg) ;
    listItem.appendChild(listText) ;
    listText.textContent = myItem ;
    listItem.appendChild(listPrice) ;
    listPrice.textContent = `$${myPrice}` ;
    listItem.appendChild(deleteBtn) ;
    deleteBtn.textContent = 'Delete' ;
    listSpace.appendChild(listItem) ;

    totalPrice += parseFloat(myPrice); //parseFloat เป็นการทำให้ค่า string เป็น number
    updateTotalPrice();

    deleteBtn.onclick = function() {
    listSpace.removeChild(listItem) ;

    totalPrice -= parseFloat(myPrice); //เป็นการลบราคาออก ตอนที่เรากดลบสินค้านั้นๆ ออกจากรายการ
    updateTotalPrice();
    }

    itemInput.focus() ;
}

function updateTotalPrice() {
    totalPriceBox.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}



