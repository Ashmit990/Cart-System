const dropdown=document.querySelector("#dropdown")
const caret=document.querySelector("#caret")
const selectionDiv=document.querySelector("#select")
const selectedMethod=document.querySelector("#selected-type")
const options=document.querySelectorAll(".li")
const selectedOption=document.querySelector("#selected-li")
const menus=document.querySelector("ul")
const shippingPrice=document.querySelector("#shipping-price")
const ship=parseInt(shippingPrice.innerHTML)
const itemsPrice=document.querySelector("#items-price")
const sumTotal=document.querySelector("#sum-total")
const mainBox=document.querySelector("#main-box")

let cartArray=JSON.parse(localStorage.getItem('cartProducts'))

cartArray.forEach(key=>{
    let productDatas=JSON.parse(localStorage.getItem(key)) || []
    let {productName,productImage,productQuantity,productPrice}=productDatas

    let div=document.createElement('div')
    div.classList.add(
        'border-t',
        'border-gray-500',
        'w-[97%]',
        'h-[60px]',
        'mt-[1px]',
        'pr-[6px]',
        'flex',
        'justify-between',
        'items-center',
        'py-[5px]',
        'md:h-[95px]'
    );

    div.innerHTML= `<div class=" w-[97%] h-[60px] mt-[1px] pr-[6px] flex justify-between items-center py-[5px] md:h-[95px]">
                
                <div class="w-[54px] h-[100%] rounded-md md:w-[96px]">
                    <img src="${productImage}" alt="" class="w-[100%] h-[100%] rounded-md">
                </div>

                <div class="w-[100px] h-[97] md:w-[150px] flex items-center">
                    <p class="text-[9px] font-medium font-lexenda md:text-[16px]">${productName}</p>
                </div>

                <div class="w-[35px] flex items-center">
                    <p class="font-lexenda text-[9px] md:text-[15px]">x${productQuantity}</p>
                </div>

                <div class="flex items-center  w-[75px]">
                    <p class="font-lexenda text-[9px] font-semibold md:text-[13px]">Rs. <span>${productPrice}</span></p>
                </div>

                <p class="text-[8px] cursor-pointer text-red-500 md:text-[14px]" >╳</p>

            </div>`

            mainBox.appendChild(div)


})



selectionDiv.addEventListener("click",()=>{
    caret.classList.toggle("rotate-180")
    menus.classList.toggle("opacity-100")

    options.forEach(option=>{

        option.addEventListener("click",()=>{
            selectedMethod.innerText=option.innerText
            shippingChoose=option.innerText
            caret.classList.remove("rotate-180")
            menus.classList.remove("opacity-100")
            options.forEach(option=>{
                option.classList.remove("bg-[#CECACA]")
            })
            option.classList.add("bg-[#CECACA]")
            shipping(shippingChoose)
            price=parseInt(shippingPrice.innerHTML)
            totalPrice(price)
        })

    })
    
})

function shipping(shippingMethod){
    let standard=1000
    let immediate=2500
    if(shippingMethod==="Standard Shipping (6-7 business days)"){
        shippingPrice.innerHTML=standard
        
    }else{
        shippingPrice.innerHTML=immediate
        
    }
    totalPrice(shippingPrice.innerHTML)
}

function totalPrice(shippingCharge){
    let netTotal=parseInt(itemsPrice.innerHTML)
     sumTotal.innerHTML=netTotal+shippingCharge
    
}

totalPrice(ship)