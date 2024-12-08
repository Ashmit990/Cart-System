let datas=JSON.parse(localStorage.getItem("this")) // fetching product datas from local storage and storing it into "datas" variable

const mainBox=document.querySelector(".mainBox");
const addProduct=document.getElementById("add-products")
const overlay=document.getElementById("overlay")    
const addPopUp=document.getElementById("add-popup")
const editPopup=document.getElementById("edit-popup")
const closeMark=document.getElementById("close-mark")
const closeEdit=document.getElementById("edit-close-mark")
const newAdd=document.getElementById("new-add")
const deletePopUp=document.getElementById("delete-popup") //accesing necessary elements

function displayProducts([key,items]){
   let {name,totalPrice}=items //destructuring datas

   return `<div class="product-card border-b mt-1 border-gray-500 flex justify-between items-center w-full h-[40px] md:h-[60px] py-1 pr-[6px]">
          <span class="span-id flex justify-center md:text-[15px] w-[43px] md:w-[100px] font-lexenda font-medium text-[7px]">${key}</span>
          <span class="span-name w-[69px] md:w-[190px] md:flex md:justify-center font-lexenda md:text-[15px] font-medium text-[7px]">${name}</span>
          <span class="flex w-[72px] font-lexenda md:text-[15px] md:w-[160px] font-medium text-[7px]">Rs. 
            <p class="span-rate">${totalPrice}</p>
          </span>
          <span class="w-[32px] md:w-[64px] flex justify-between md:text-[10px] font-lexenda font-medium text-[7px]">
            <i class="span-edit cursor-pointer fa-solid fa-pen-to-square text-[15px] md:text-3xl" data-id="${key}"></i>
            <i class="span-delete cursor-pointer fa-solid fa-trash text-[15px] md:text-3xl" style="color: #511f1f;" data-id="${key}"></i>
          </span>
        </div>` //returns the html and css structure for each object present in datas
}


addProduct.addEventListener("click",()=>{
  overlay.classList.remove("hidden")
  addPopUp.classList.remove("hidden")// when clicked on add button, overlay is shown

  closeMark.addEventListener("click",function(){
    overlay.classList.add("hidden")
    addPopUp.classList.add("hidden")// when clicked on close button, overlay is hidden
  })
})

closeEdit.addEventListener("click",function(){
  overlay.classList.add("hidden")
  editPopup.classList.add("hidden")// when clicked on close button, overlay is hidden
})


function addProducts(id,name,description,image,totalPrice,category){
 //takes id, name, description, image, totalPrice and category as parameters.

    datas[id]={
      name:name,
      totalPrice:totalPrice,
      description:description,
      image:image,
      category:category
    } //new object with new key is formed
    
    localStorage.setItem('this',JSON.stringify(datas))//save newly added objects in local storage.

}

function addInfo(){
  const newId=document.getElementById("new-id").value
  const newName=document.getElementById("new-name").value
  const newDes=document.getElementById("new-des").value
  const newUrl=document.getElementById("new-url").value
  const newPrice=parseInt(document.getElementById("new-price").value)
  const newCategory=document.getElementById("new-category").value //accessing values of a product which is going to be added

  addProducts(newId,newName,newDes,newUrl,newPrice,newCategory) // calling addProducts function with newly added values as parameters which will save the newly created product object inside datas

}

newAdd.addEventListener("click",function(){
    addInfo(); // when clicked on add btn it calls the addInfo function which adds new object into local storage
    overlay.classList.add("hidden")
    addPopUp.classList.add("hidden") // when clicked on close btn, popup and overlay should be hidden
    location.reload() // the page gets reloaded after clicking on add button

})

mainBox.addEventListener("click",function(e){
  const removeIt=document.getElementById("remove-it")
  const closeIt=document.getElementById("close-it")
    if(e.target.classList.contains("span-delete")){ //inside mainBox, when the clicked target contains "span-delete" class, then it is delete button
        const code = e.target.getAttribute("data-id"); //accessing the data-id of a selected delete button
        console.log(code); //for debugging purpose
        console.log("Delete clicked!"); //for debugging purpose
        overlay.classList.remove("hidden")
        deletePopUp.classList.remove("hidden") //overlay is shown

        removeIt.addEventListener("click",function(){
          
          delete datas[code] //when clicked on remove button it will delete the object from datas which contains the respective data-id

          localStorage.setItem("this",JSON.stringify(datas)) //after deleting, it will save new changes

          overlay.classList.add("hidden")
          deletePopUp.classList.add("hidden") //overlay is hidden

          mainBox.innerHTML = Object.entries(datas).map(displayProducts).join(""); //then the products are updated/structured dynamically through displayProducts function after adding new products
        })

        closeIt.addEventListener("click",function(){
          overlay.classList.add("hidden")
          deletePopUp.classList.add("hidden") //when clicked on close button it hides the overlay
        })


    }

    if(e.target.classList.contains("span-edit")){
      let code = e.target.getAttribute("data-id");
      console.log(code)
      overlay.classList.remove("hidden")
      editPopup.classList.remove("hidden")

      const saveChanges=document.getElementById("new-change") //accessing "Save Changes" Button

      function editProducts(code, name, image, description, totalPrice, category) {
        // Update only the properties of the existing object in `datas`
        datas[code]={
          name:name,
          totalPrice:totalPrice,
          description:description,
          image:image,
          category:category
        } 
    
        // Save the updated object back to localStorage
        localStorage.setItem("this", JSON.stringify(datas));
    }
    

      function editInfo(key, value) {
        
        document.getElementById("edit-id").value = key; // Set the product key in the edit-id input
        document.getElementById("edit-name").value = value.name;
        document.getElementById("edit-des").value = value.description;
        document.getElementById("edit-url").value = value.image;
        document.getElementById("edit-price").value = value.totalPrice;
        document.getElementById("edit-category").value = value.category;
    }

    function editDatas(){
      let editId= document.getElementById("edit-id").value
      let editName=document.getElementById("edit-name").value
      let editDes=document.getElementById("edit-des").value
      let editUrl=document.getElementById("edit-url").value
      let editPrice= parseInt(document.getElementById("edit-price").value)
      let editCategory=document.getElementById("edit-category").value

      editProducts(editId,editName,editUrl,editDes,editPrice,editCategory)
    }

    saveChanges.addEventListener("click",function(){
      editDatas()
      location.reload()
       overlay.classList.add("hidden")
       editPopup.classList.add("hidden")
    })

    // Loop through all products and find the one that matches the code (key)
    Object.entries(datas).forEach(([key, value]) => {
        if (key === code) {
            editInfo(key, value); // Populate the form with the product's details
        }
    });
    

      
    }
})


mainBox.innerHTML=Object.entries(datas).map(displayProducts).join(""); //Products are structured dynamically through displayProducts function



  