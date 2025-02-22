
const filterButtons = document.querySelectorAll(".filter-buttons button");
const productItems = document.querySelectorAll(".product-item");

function filterProducts(category,searchQuery="") {
    for(let i=0;i<productItems.length;i++){
        const item=productItems[i];
        const itemCategory=item.getAttribute("data-category");

        if(category==='all'  || itemCategory===category){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    }
}

for(let i=0;i<filterButtons.length;i++){
    const button=filterButtons[i];
    button.addEventListener("click",function(){
        const filter=this.getAttribute("data-filter");
        filterProducts(filter);
           
        for(let j=0;j<filterButtons.length;j++){
            filterButtons[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}


filterProducts("all");
filterButtons[0].classList.add("active");
