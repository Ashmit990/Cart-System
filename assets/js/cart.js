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
const box=document.querySelector("#box")
const boxes=document.querySelector("#boxes")
const horizontal=document.querySelector("#horizontal")
const okBtn=document.querySelector("#ok-btn")
const checkOutBtn=document.querySelector("#check-out-btn")
const yourEmail=document.getElementById("your-email")
const message = document.getElementById('message');
const closeBtn=document.getElementById("close") //accessing necessary elements

function openMsg(){
    message.classList.remove("opacity-0")
    message.classList.remove("scale-[0]");
    message.classList.add("scale-[1]");
    message.classList.remove("top-[0]");
    message.classList.add("top-[22%]");  
} //this shows the success message after purchasing products at top of the page

checkOutBtn .addEventListener("click",()=>{
     overlay.classList.remove("hidden")
}) //when clicked on check out button it will show the invoice overlay which contains all the details of products of cart and total price including charges of shipping

box.style.display="flex"

let cost=0 //initializing cost as 0
let currentIndex=0 //initializing currentIndex as 0 which keeps the track of total number of items in "MyCart"

let cartArray=JSON.parse(localStorage.getItem('cartProducts')) || [] //accessing "cartProducts" array where all the details of selected products are stored inside a unique key in local storage, and storing "cartProducts" in "cartArray" variable show that we can re-use it later

const totalItems=document.querySelectorAll(".items") //accessing total items present in MyCart

cartArray.forEach((key,index)=>{
    let productDatas=JSON.parse(localStorage.getItem(key)) || [] //fetches the each unique keys which contains respective details of products from local storage and storing it to "productDatas" variable

    let {productName,productImage,productQuantity,productPrice}=productDatas //destructuring product datas from each unique key 
   
    cost+=productPrice //giving value of product price (after changing quantity in cover page) to cost variable

    currentIndex=index+1 //increasing index by 1 initially because array's index starts from 0

    totalItems.forEach((items)=>{
        items.innerHTML=currentIndex //setting totalItems.innerHtml to currentIndex (number of items)
    })

   
    let div=document.createElement('div') //creating new element div
    let removeSign=document.createElement('p') //creating new element p

    removeSign.classList.add(
        'wrong',
        'text-[8px]',
        'cursor-pointer',
        'text-red-500',
        'md:text-[14px]'
    ) //assigning tailwind css classlists to removeSign element (p)

    removeSign.innerHTML="╳" //adding cross icon

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
    ); //assigning tailwind css classlists to newly created div element

    div.innerHTML= `<div class="w-[97%] h-[60px] mt-[1px] pr-[6px] flex justify-between items-center py-[5px] md:h-[95px]">
                
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

            </div>` //structuring the details of each unique key inside div.innerHTML

            div.appendChild(removeSign) //adding removeSign inside the newly created div

            mainBox.appendChild(div) //adding newly created div which contains product info (which user added) inside mainBox
            //this creates div for each and every details of respective unique keys

            let popupBox=document.createElement("div") //creating new element "popupBox"

            popupBox.classList.add(
                'popupss',    
            ) //adding classList
           
            popupBox.innerHTML=`
               <div class=" box font-lexenda font-semibold flex justify-between items-center  h-[30px] md:h-[57px] border-b border-gray-500">
                        <div class="flex   w-[100px]"> 
                             <span class="text-[7px] md:text-[13px] ">${productName}</span>
                        </div>
        
                        
        
                        <div class="w-[70px] flex px-3 ">
                            <p class="text-[7px] md:text-[13px]">x <span>${productQuantity}</span></p>
                        </div>
        
                        <div class="w-[60px] md:w-[100px] flex justify-center">
                            <p class="text-[7px] md:text-[13px] ml-[13px]">Rs. <span>${productPrice}</span></p>
                        </div>
              </div>` //structure the details of each unique key and store it inside popupBox

            horizontal.appendChild(popupBox) //this adds popupBox to div element named "horizontal" which we created in html
             
            okBtn.addEventListener("click",function(){

                 overlay.classList.add("hidden")

                 openMsg() //when clicked on purchase button it will hide the overlay and call the openMsg function which will show the success message of products purchasing

                

           })

            closeBtn.addEventListener("click",function(){
                 message.style.display="none" //when clicked on "Back To Shop" button it will hide the success message

                 localStorage.removeItem(key) // it also removes all unique keys from local storage because after user purchases it , there is no need of showing those products on "MyCart"

                 localStorage.removeItem('cartProducts') //it also removes "cartProducts" array where all unique keys where stored

                 location.reload() //this reloads the page

                 if(yourEmail.value==="ashmitcristiano07@gmail.com"){

                    
                    window.location.href="/Shopping-Cart/components/admin.html"
                   
                     
                   }
                   else{
                     window.location.href="/Shopping-Cart/index.html"
                   }

                  //this will redirect us to home page when clicked on "Back To Shop" button      
            })

            removeSign.addEventListener("click",function(e){ // this is a remove icon present at side of each products in "MyCart"

                    let elements=e.target.parentElement //this targets the parentElement of clicked remove icon

                    elements.remove() //it removes the parent element

                    localStorage.removeItem(key) //it also removes the unique key of removed item

                    cartArray = cartArray.filter(k => k !== key);
                    localStorage.setItem('cartProducts', JSON.stringify(cartArray))
                    location.reload() //this reloads the page
                })

})


itemsPrice.innerHTML=cost //updates the itemsPrice.innerHTML

console.log(cost) //for debugging purpose

let price=ship
selectionDiv.addEventListener("click",()=>{
    caret.classList.toggle("rotate-180")
    menus.classList.toggle("opacity-100")

    options.forEach(option=>{

        option.addEventListener("click",()=>{
            
            selectedMethod.innerText=option.innerText
            let shippingChoose=option.innerText
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

function totalPrice(shippingCharge) {
    // Ensure shippingCharge is converted to an integer
    shippingCharge = parseInt(shippingCharge) || 0;

    // Calculate the net total
    let netTotal = parseInt(itemsPrice.innerHTML) || 0;
    let finalTotal = netTotal + shippingCharge;

    // Update the sum total in the DOM
    sumTotal.innerHTML = finalTotal;

    // Check if an htag already exists
    let htag = document.querySelector("#total-price-tag");
    if (!htag) {
        // Create it if it doesn't exist
        htag = document.createElement("h1");
        htag.id = "total-price-tag"; // Add an ID to avoid duplicates
        htag.classList.add(
            "mx-auto",
            "font-bold",
            "text-[16px]",
            "mt-[10px]",
            "w-[183px]",
            "md:text-[17px]",
            "md:w-[200px]"
        );
        boxes.appendChild(htag);
    }

    // Update the htag content
    htag.innerHTML = `Total Price: Rs. <span>${finalTotal}</span>`;
    console.log(finalTotal);
}

totalPrice(ship)