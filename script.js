var sName = document.querySelector(".input1");
var pPrice = document.querySelector(".input2");
var qty = document.querySelector(".input3");
var cPrice = document.querySelector(".input4");
var outputDiv = document.querySelector(".output");
var btn = document.querySelector(".submit-button");



function clickHandler() {
    
    /*contentDiv.classList.remove("sadTheme");
    contentDiv.classList.remove("happyTheme"); */

   let stockName, purchasePrice, quantity, currentPrice, netPrice, percentage ;
   stockName= Number(sName.value);
   purchasePrice = Number(pPrice.value);
   quantity = Number(qty.value);
   currentPrice = Number(cPrice.value);

   if(purchasePrice>currentPrice)
   {
       const loss= (purchasePrice-currentPrice)*quantity;
       const lossPer = (((purchasePrice-currentPrice)*100)/purchasePrice);
       outputDiv.innerText = ("youre in loss" + loss + lossPer);

       if(lossPer>50){
          
        
       }
       
   }
   else{
       const profit = (currentPrice-purchasePrice)*quantity;
       const profitPer = (((currentPrice-purchasePrice)*100)/currentPrice);
       outputDiv.innerText = ("youre in profit" + profit + profitPer);

   }

   
       


};

btn.addEventListener("click", clickHandler)