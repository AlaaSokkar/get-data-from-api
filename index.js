
async function getData(){
    var products=await fetch(`https://fakestoreapi.com/products`);
    var allProducts=await products.json();
    var arrayOfProduct=allProducts;
    displayProduct(arrayOfProduct);
    console.log(arrayOfProduct);
}
getData();

var container=[];
 function displayProduct(container){

    cartona=``;
    for(var i=0; i< container.length; i++){
        cartona+=`<div class="col col-md-3 my-4">
                    <div class="div-img mt-2 mb-1">
                        <img src="${container[i].image}" alt="ssaa" srcset="">

                    </div>
                     
                    <h3 class="m-0" >Rate: ${container[i].rating.rate}</h3>
                    <h4>Price:  ${container[i].price}</h4>
                </div>`
    }
    document.getElementById("rowData").innerHTML=cartona;
    console.log("jhjgbjh")
    
 }