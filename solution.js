function solve() {

   let player1 = document.getElementById("player1Div");
   let player2 = document.getElementById("player2Div");
   let btn = [...document.querySelectorAll("img")];
   let check = [...document.querySelectorAll("span")];
   btn.forEach(btn => btn.addEventListener("click", play));
   let count = 0;
   let clickedCardName = '';
   historyID = document.getElementById("history");
   let firstCard;
   let secondCard;
   let powerFirstCard = 0;
   let powerSecondCard = 0;

   function play(event) {
      count += 1;
      clickedCard = event.target;
      clickedCard.src = "./images/whiteCard.jpg";
      clickedCardName = Number(clickedCard.name);
      

      if (count == 1) {
         firstCard = clickedCard;
         powerFirstCard = Number(clickedCardName);
         if (firstCard.parentNode.id === "player1Div"){
            check[0].textContent = clickedCardName;
            check[2].textContent = '';
         } else {
            check[2].textContent = clickedCardName;
            check[0].textContent = '';
         }
         
      } else {
         secondCard = clickedCard;
         powerSecondCard = Number(clickedCardName);
         if (secondCard.parentNode.id === "player2Div"){
            check[2].textContent = clickedCardName;
         } else {
            check[0].textContent = clickedCardName;
         }
         
         if (firstCard.parentNode.id === "player1Div"){
         historyID.innerHTML += `[${check[2].textContent} ${check[1].textContent} ${check[0].textContent}] `;
         } else if (firstCard.parentNode.id === "player2Div"){
            historyID.innerHTML += `[${check[0].textContent} ${check[1].textContent} ${check[2].textContent}] `;
            }
         count = 0;
         clickedCardName = '';
         if (powerFirstCard > powerSecondCard){
            firstCard.style.border = "2px solid green";
            secondCard.style.border = "2px solid red";
         } else {
            secondCard.style.border = "2px solid green";
            firstCard.style.border = "2px solid red";
         }
      }
      
   }
}