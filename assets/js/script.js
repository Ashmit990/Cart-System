const productBox = document.querySelector("#product-box");
productBox.style.display="flex"
const dropdowns = document.querySelectorAll("[data-dropdown]");

// State to track selected filters
let selectedCategory = "All"; //Default value is All, later.. can choose categories
let selectedPriceOrder ="Mixed"; //Default value is Mixed, later.. can choose "low-to-high" or "high-to-low"

dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector("[data-select]");
    const caret = dropdown.querySelector("[data-caret]");
    const menu = dropdown.querySelector("[data-menu]");
    const options = dropdown.querySelectorAll("[data-menu] li");
    const selection = dropdown.querySelector(".selected-cat");
    const dropdownType = dropdown.getAttribute("data-type"); // Get the type of dropdown (category or price)

    // Toggle dropdown menu visibility
    select.addEventListener("click", () => {
        caret.classList.toggle("rotate-180");
        menu.classList.toggle("opacity-100");
    });

    // Handle option selection
    options.forEach((option) => {
        option.addEventListener("click", () => {
            // Update the displayed selected value
            selection.innerText = option.innerText;

            // Close the dropdown
            caret.classList.remove("rotate-180");
            menu.classList.remove("opacity-100");

            // Highlight the selected option
            options.forEach((opt) => opt.classList.remove("bg-[#282929]"));
            option.classList.add("bg-[#282929]");

            // Update filters based on the dropdown type
            if (dropdownType === "category") {
                selectedCategory = option.innerText; //if dropdownType is category then selected category would be category's option.innerText
            } 

            if (dropdownType === "price") {
                if (option.innerText === "Mixed") {
                    selectedPriceOrder = "Mixed";
                } else if (option.innerText === "Low To High") {
                    selectedPriceOrder = "low-to-high";
                } else if (option.innerText === "High To Low") {
                    selectedPriceOrder = "high-to-low";
                }
            }//if dropdownType is price then selectedPrice would be price's option.innerText
            
            applyFilters(datas, selectedCategory, selectedPriceOrder);
            // Apply the selectedCategory and SelectedPrice and then filter the products
        });
    });
});


const datas = JSON.parse(localStorage.getItem("this")) || {}; //fetching the products informations through local storage and storing it into "datas" variable


function createCards([key,product]){

    let {totalPrice,description,image}=product  //Destructuring the datas
    

        return  ` <div data-card="card" class="bg-[#EDEAEA] w-[78px] h-[115px] flex flex-col items-center justify-between pb-[3px] shadow-black-custom md:w-[231px] md:h-[323px] md:pb-1 hover:scale-105 transform duration-[0.5s] md:my-4 my-2 cursor-pointer rounded-md">
        <div data-image="image" class=" h-[51%] w-full md:h-[58%] rounded-md">
            <img src="${image}" alt="" class="w-[100%] h-[100%] rounded-md">
        </div>
        <div data-details="details" class="border-1 borde px-1 md:px-3">
            <p class="text-[5px] md:text-[13px] font-inria">${description}</p>
        </div>
        <div data-rupees="ruppes" class="font-jockey-one text-[#4C0102] text-[8px]  flex items-center justify-between w-full px-[2.5px] md:px-3 md:text-[20px]">
            <p>Rs.${totalPrice}</p>
            <img src="assets/Product Photos/Rating (2).png" alt="" class="h-[5px] w-[23px] md:h-[17px] md:w-[92px]">
        </div>
        <button data-key="${key}" class="add-btn w-[94%] h-[20px] font-lexenda text-[10px] bg-[#C7C6C6] hover:bg-custom-search hover:text-white rounded-md transform duration-500 md:h-[50px] md:w-[92%] md:text-[18px]" >Add To Cart</button>
       </div>`//returns html and css structure for each and every object stored in datas

       

       
}

productBox.innerHTML=Object.entries(datas).map(createCards).join('') //this will apply the createCards function to each and every products inside the object ie. will generate card for each products



function applyFilters(datas, category, priceOrder) {

    let filteredProducts = Object.entries(datas); //this converts products object into array

    if (category && category !== "All") {
        filteredProducts = filteredProducts.filter(([key, product]) => product.category === category);//if category is anything except 'All' it will filter out the product based on selected category
    }//this also means, avoid filtering the products when selectedCategory is 'All'

    if (priceOrder === "low-to-high") {
        filteredProducts.sort(([keyA, productA], [keyB, productB]) => productA.totalPrice - productB.totalPrice);
    } else if (priceOrder === "high-to-low") {
        filteredProducts.sort(([keyA, productA], [keyB, productB]) => productB.totalPrice - productA.totalPrice);
    }//this sorts the products based on low to high or high to low
    productBox.innerHTML = filteredProducts.map(createCards).join('');
    eventListener()//re-attaching eventlistener
    //Finally it will display the respective filterred products
}

function eventListener(){

    const allBtns = document.querySelectorAll(".add-btn"); //accessing "Add To Cart" button
    const overlay=document.querySelector(".overlay") //accessing overlay 
    

    allBtns.forEach(btn=>{

        btn.addEventListener("click",function(e){

           const key=e.target.getAttribute("data-key")//when clicked on "Add To Cart" button it will return the data-key of respective "Add To Cart" button and stores it into "key" variable
           
           const {name,totalPrice,image}=datas[key] //accessing and destructuring the product object of respective/selected data-key
           let price=totalPrice //initializing value of price as "totalPrice" which can be increased on decreased later on..

           

           overlay.innerHTML=` <div class="content absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] transition-opacity ease-in duration-800">
            <div class="popup w-[275px] bg-[#CFCDCD] h-[450px] m-auto rounded-md flex flex-col items-center justify-between pb-2  ">
                <div class="w-full h-[55%] rounded-md">
                    <img src="${image}" alt="" class="w-full h-full rounded-md">
                </div>
                <div class="w-full flex justify-center items-center">
                    <p class="font-lexenda text-[20px]">${name}</p>
                </div>
                <div class=" w-full flex justify-between px-2 flex-col">
                    <div class="flex justify-between">
                        <p class="font-lexenda">Quantity :</p>
                    <input class="quantity w-[120px] rounded-md bg-[#B5B2B2] font-lexenda px-4 outline-none" type="number" value="1" min="1">
                    </div>
                    
                    <hr class="w-[261px] border-1 border-gray-400 mx-auto mt-[22px]">
                </div>
                
                <div class="w-full pl-2 flex justify-between pr-2 ">
                    <p class="font-lexenda">Total Price :</p>
                    <p class="font-lexenda">Rs. <span class="tc">${totalPrice}</span></p>
                </div>
        
                <button class="place text-[20px] bg-[#B5B2B2] rounded-md flex items-center justify-center font-lexenda w-[90%] h-[50px] hover:scale-105 transition duration-300">Place To MyCart <img src="assets/Product Photos/cart(black).png" alt="" class="h-6 w-6"></button>
                
            </div>
        </div>` //returns a box of a selected product through data-id, where we can increase or decrease the quantity of products and finally add them to "MyCart"
       

          overlay.style.display="block"

          const totalQuantity = overlay.querySelector(".quantity"); //accessing selected quantity of a product
          const totalPriceSpan = overlay.querySelector(".tc"); //then accessing price after changing quantity of a product

          
        
          // Add event listener to dynamically update the total price
          totalQuantity.addEventListener("input", function () {
            // Prevent quantity from going below 1
            if (totalQuantity.value < 1) {
              totalQuantity.value = 1;
            }
        
            // Calculate the new total price
             price = totalPrice * totalQuantity.value;
        
            // Update the total price in the UI
            totalPriceSpan.textContent = price;
    
          });
          
          const placeBtn=document.querySelector(".place") //accessing "Place To MyCart" button
          placeBtn.addEventListener("click",function(){
            localStorage.setItem("this",JSON.stringify(datas))
            let details={
                productName:name,
                productImage:image,
                productQuantity:totalQuantity.value,
                productPrice:price,
                initial:totalPrice
            }//creating new "details" object which contains tha values of selected product of a selected data-key after clicking on "Add To Cart" button

             let uniqueItem=`${name}` //giving unique local storage key to every selected products

             localStorage.setItem(uniqueItem,JSON.stringify(details)) //details of each selected products is stored in each unique key of product in local storage

             let cartProducts=JSON.parse(localStorage.getItem('cartProducts')) || [] // this checks if there is any value inside the key "cartProducts" if not it initializes as empty array

             cartProducts.push(uniqueItem) //and after intializing, it pushes the unique key of the selected object of a product into "cartProducts" array

             localStorage.setItem('cartProducts',JSON.stringify(cartProducts)) //then it saves each unique key of selected products into an array

             window.location.href="components/cart.html"//then it will redirect the user to cart.html page where there are products which users added into their MyCart

             //After doing all this, the items which user added to their cart is stored as a unique key inside "cartProducts" array and each unique key contains respective details of the products
            
         })
        
        })
    })
}
const cartIcon=document.querySelector("#cartIcon") //accessing "MyCart" option
cartIcon.addEventListener("click",function(){
    window.location.href="components/cart.html" //when clicked on "MyCart" it will redirect us to cart.html page where it will show the products that user added into their "MyCart"
})
eventListener() //initial event listener


 




