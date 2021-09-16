var sName = document.querySelector(".input1");
var pPrice = document.querySelector(".input2");
var qty = document.querySelector(".input3");
var cPrice = document.querySelector(".input4");
var outputDiv = document.querySelector(".output");
var btn = document.querySelector(".check-button");


outputDiv.style.display = "none" ;

function changeColor(color) {
    document.body.style.background = color;
}



function clickHandler() {

   let stockName, purchasePrice, quantity, currentPrice, netPrice, percentage ;
   stockName= sName.value;
   purchasePrice = Number(pPrice.value);
   quantity = Number(qty.value);
   currentPrice = Number(cPrice.value);
   outputDiv.style.display = "block" ;
   
if( purchasePrice > 0 && quantity > 0 && currentPrice > 0){
   


   if(purchasePrice>currentPrice)
   {
       const loss= (purchasePrice-currentPrice)*quantity;
       const lossPer = (((purchasePrice-currentPrice)*100)/purchasePrice);
       outputDiv.innerText = ("Your " + stockName + " share is in loss of Rs. " + loss + "\n" + "Your loss percentage is: "+ lossPer.toFixed(2) + "%");
       outputDiv.style.background = "#ff8787";

       if(lossPer>50){
        changeColor('#EF4444');
       }
       
   }
   else{
       const profit = (currentPrice-purchasePrice)*quantity;
       const profitPer = (((currentPrice-purchasePrice)*100)/currentPrice);
       outputDiv.innerText = ("Your " + stockName + " share is in profit of Rs. " + profit + "\n" + "Your profit percentage is: " + profitPer.toFixed(2) + "%");
       outputDiv.style.background = "#69db7c";
   } 
} 

else{
    outputDiv.innerText = "Please enter the required data !";
}

};

btn.addEventListener("click", clickHandler);