// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


function getRandomQ () {
	 const randomNr = Math.floor(Math.random() * quotes.length); 
	 const message = '<p class="quote">' +  quotes[randomNr].quote + '</p>'
		        +  '<p class="source">' + quotes[randomNr].source + '<span class="citation">'+ quotes[randomNr].citation + '</span></p>'
		        + '<p><span class="tag">' + quotes[randomNr].tags[0]   +' </span> <span class="tag">' + quotes[randomNr].tags[1] + '</span></p>' ; 
	 return message;
} 



function printQuote(){
	//console.log('heloo');
	 
         document.getElementById("quote-box").innerHTML = getRandomQ();
	                        
}







document.getElementById('loadQuote2').addEventListener("click", printRandomQuote, false);


var viewedQuotes = [];                                      // array to hold viewed quotes

function getRandomQuote() {
  if (quotes.length == 0)                                   // if empty, reload the main list
    quotes = viewedQuotes.splice(0, viewedQuotes.length);   // (and empty viewed list)
  var randNum = Math.floor(Math.random() * quotes.length);  // pick a quote at random
  var rquote = quotes.splice(randNum, 1)[0];                 // take it out of the main list
  viewedQuotes.push(rquote);  
  var message =   '<p class="quote">' +  rquote.quote + '</p>'
		        +  '<p class="source">' + rquote.source + '<span class="citation">'+ rquote.citation + '</span></p>'
		        + '<p><span class="tag">'+ rquote.tags[0] + '  </span><span class="tag">'+ rquote.tags[1] + '</span></p>'; 
                                 // now add it to the "viewed" list
  return message;                                             // return the chosen quote
}

//getRandomQuote(quotes); 


// for(i=0; i<= 3; i++){
// 	 var taguri = '<span>' + rquote.tags[i] +'</span>'; 
// }


 function printRandomQuote(){
	//console.log('heloo');
	 document.getElementById("quote-box").innerHTML =  getRandomQuote();  	                        
}


 


