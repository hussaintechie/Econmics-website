var bar=document.querySelector(".side-navbar")
    
    function showbar()
    {
        bar.style.left="0"
    }
    function hidesidebar(){
        bar.style.left="-60%"
    }
    /* search*/
    var search=document.getElementById("search")
    var product=product.getElementById("product")
    var productlist=productContainer.querySelectorAll("div")
    search.addEventListener("keyup",function () {
    var entervalue=event.target.value.toUppercase()
    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUppercase().indexof(entervalue)<0)
           {
            productlist[Count].style.display="none"
           }
           else
           productlist[Count].style.display="block"

    }
        
    })
   
  