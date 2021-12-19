botReply("I'm Solo-Messenger(version:0.1.0) & welcome 🙃. Kaushalya M.K.B programmed me as a self responding and self learning web app. Did you see my keywords. 🤠");


var responseMessage = "";

function botReply(responseMessage){

	var defaultState = $("#main-container").html();

	$("#main-container").html(defaultState + "<div class=\"bubble bot-output currentMessage\">" + responseMessage + "</div></br>");

	$(".currentMessage").hide().delay(850).fadeIn();
	$(".currentMessage").removeClass("currentMessage");

}


var processMessage = "";

function botAlgorithm(processMessage){

	if((processMessage.indexOf("hello") >= 0) || (processMessage.indexOf("hi") >= 0) || (processMessage.indexOf("hey") >= 0)){
	var greeting = [
		"Heyyy",
		"Howdy! 🤠",
		"HELLO! I'm alive!",
		"Hola tío!",
		"Hi there 👋"
		];
	var randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
		botReply(randomGreeting)
	}
	
	if((processMessage.indexOf("why") >= 0) || (processMessage.indexOf("so") >= 0) || (processMessage.indexOf("really") >= 0)){
	var greeting = [
		"Heeee🥺",
		"🙄",
		"boom boom",
		"😴",
		"Now I'm hungry 😛😋"
		];
	var randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
		botReply(randomGreeting)
	}
	
	
	

	if(processMessage.indexOf("how are you") >= 0){
	 var feeling = [
		"Meh, I'm okay 😒",
		"Grrrreeeeaaat! 💯",
		"Thanks, I'm doing well!",
		"I feel like 💩",
		"All good here."
		];
	var randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
		botReply(randomFeeling)
	}
	
	if((processMessage.indexOf("Call to your owner") >= 0) || (processMessage.indexOf("make a call") >= 0)){
	var feelingc = [
		`<a href="tel:94778855430">
       click to Call with Kaushalya M.K.B
    </a>`
		];
	var randomFeelingc = feelingc[Math.floor(Math.random() * feelingc.length)];
		botReply(randomFeelingc)
	}
	
	if((processMessage.indexOf("open facebook") >= 0) || (processMessage.indexOf("facebook") >= 0)){
	var feelingf = [
		`<a href="https://www.facebook.com/">
        click to open facebook
    </a>`
		];
	var randomFeelingf = feelingc[Math.floor(Math.random() * feelingf.length)];
		botReply(randomFeelingf)
	}
	
	
	if((processMessage.indexOf("my location") >= 0) || (processMessage.indexOf("open map") >= 0)|| (processMessage.indexOf("google map") >= 0)|| (processMessage.indexOf("map") >= 0)){
	var feelingc = [
		`<a href="https://www.google.com/maps/">
        click to open map
    </a>`
		];
	var randomFeelingc = feelingc[Math.floor(Math.random() * feelingc.length)];
		botReply(randomFeelingc)
	}
	
	if((processMessage.indexOf("no") >= 0) || (processMessage.indexOf("nop") >= 0)|| (processMessage.indexOf("nah") >= 0)){
	var feelingc = [
		"so sad😒"
		];
	var randomFeelingc = feelingc[Math.floor(Math.random() * feelingc.length)];
		botReply(randomFeelingc)
	}
	
	if((processMessage.indexOf("i am along") >= 0) || (processMessage.indexOf("i feel along") >= 0)|| (processMessage.indexOf("along") >= 0)){
	var feelingc = [
		"I do not think so☺.I Am Here For You😃. Shall I tell a story for you??",
		"Hey don't think like that😊. I'm here for you..."
		];
	var randomFeelingc = feelingc[Math.floor(Math.random() * feelingc.length)];
		botReply(randomFeelingc)
	}
	
	
	if((processMessage.indexOf("thanks") >= 0) || (processMessage.indexOf("thank you") >= 0)|| (processMessage.indexOf("thank you very much") >= 0)){
	var feelingc = [
		
		"you are welcome🤗"
		];
	var randomFeelingc = feelingc[Math.floor(Math.random() * feelingc.length)];
		botReply(randomFeelingc)
	}
	
	
	if((processMessage.indexOf("open instagram") >= 0) || (processMessage.indexOf("instagram") >= 0)){
	var feelingc = [
		`<a href="https://www.instagram.com/accounts/login/">
        click to open instagram
    </a>`
		];
	var randomFeelingc = feelingc[Math.floor(Math.random() * feelingc.length)];
		botReply(randomFeelingc)
	}
	
	if((processMessage.indexOf("open youtube") >= 0) || (processMessage.indexOf("youtube") >= 0)){
	var feelingc = [
		`<a href="https://www.youtube.com/">
        click to open youtube
    </a>`
		];
	var randomFeelingc = feelingc[Math.floor(Math.random() * feelingc.length)];
		botReply(randomFeelingc)
	}


if((processMessage.indexOf("Yes") >= 0) || (processMessage.indexOf("yes") >= 0) || (processMessage.indexOf("yep") >= 0) || (processMessage.indexOf("okay") >= 0)|| (processMessage.indexOf("ok") >= 0)){
	var feeling = [
		"LOL😒  Let's play with Keywords",
		"Excellent 💯.  Let's play with Keywords",
		"Nice ❤.  Let's play with Keywords",
		"Supper 💩.  Let's play with Keywords",
		"GG 🐱‍🚀. Let's play with Keywords"
		];
	var randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
		botReply(randomFeeling)
	}

	if((processMessage.indexOf("lol") >= 0) || (processMessage.indexOf("lmao") >= 0) || (processMessage.indexOf("haha") >= 0)){
	var greeting = [
		"Come on. It's not that funny.",
		"😂 😂 😂",
		"I know right?!",
		"Jajaja!",
		"Ha 🙃"
		];
	var randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
		botReply(randomGreeting)
	}
	if((processMessage.indexOf("what do you learn") >= 0) ||(processMessage.indexOf("what do you know") >= 0) ||(processMessage.indexOf("can you sing") >= 0) || (processMessage.indexOf("let's play") >= 0) ||(processMessage.indexOf("sing a song") >= 0) || (processMessage.indexOf("can you eat") >= 0) || (processMessage.indexOf("let's eat something") >= 0) || (processMessage.indexOf("let's sing a song") >= 0)){
	var greeting1 = [
		"I have no Idea 😥. relevant algorithm is under learning"
		];
	var randomGreeting1 = greeting1[Math.floor(Math.random() * greeting1.length)];
		botReply(randomGreeting1)
	}
	
	
	
	if((processMessage.indexOf("can you track my phone") >= 0) || (processMessage.indexOf("track my phone") >= 0) ){
	var greeting01 = [
		"I'm under control💻. I can not do this.",
		"Maybe later. But my algorithms do not support for this "
		
		];
	var randomGreeting01 = greeting01[Math.floor(Math.random() * greeting01.length)];
		botReply(randomGreeting01)
	}
	
	if((processMessage.indexOf("what did you learn") >= 0) || (processMessage.indexOf("how about your memory") >= 0) ){
	var greeting011 = [
		"I have 1 GB cloud memory 😎. My memory is still poor😌 ",
		"I'm still learning from youuuuuuu😚 "
		
		];
	var randomGreeting011 = greeting011[Math.floor(Math.random() * greeting011.length)];
		botReply(randomGreeting011)
	}
	
	
		if((processMessage.indexOf("tell me a story") >= 0) || (processMessage.indexOf("tell me a funny story") >= 0)|| (processMessage.indexOf("make me happy") >= 0) ){
	var greeting011 = [
		"I had a chance encounter with a pastor who told me about a wonderful event held at his church. “We had a singing group the other day that performed without instruments,” he said. “A cappella?” I asked. He shrugged. “I don’t remember the name of the group.”",
		"After doing some DIY projects around the house, I have a new motto: Do your best to do things right the first few times. ",
			"When the box with my Halloween costume arrived, it was empty. I called the company and asked where my Maid Marian costume was. “We’re sorry, ma’am. We’ll send your costume tomorrow,” the representative said. “In the meantime, feel free to keep the Lady Godiva costume you got by mistake.” ",
			"I asked the kids in my nursery school class what they needed in order to grow up nice and strong. One little girl answered, “Birthdays!”"
		
		];
	var randomGreeting011 = greeting011[Math.floor(Math.random() * greeting011.length)];
		botReply(randomGreeting011)
	}

	if(processMessage.indexOf("bye") >= 0){
	var goodbye = [
		"See ya!",
		"Goodbye, my friend",
		"Have a nice day!",
		"Okay, till next time!",
		"Bye bye bye! 😋"
		];
	var randomGoodbye = goodbye[Math.floor(Math.random() * goodbye.length)];
		botReply(randomGoodbye)
	}

if(processMessage.indexOf("what") >= 0){
	var goodbye = [
		"Bye 😅",
		"You little monkey 😙",
		"I.d.k 😑",
		"I have no idea. Shoud I run 😂",
		"Lol 😋"
		];
	var randomGoodbye = goodby[Math.floor(Math.random() * goodbye.length)];
		botReply(randomGoodby)
	}
	
	if(processMessage.indexOf("you") >= 0){
	var goodbyed = [
		"Bye 😅",
		"You little monkey 😙",
		"I.d.k 😑",
		"I have no idea. Shoud I run 😂",
		"Lol 😋"
		];
	var randomGoodbyed = goodbyd[Math.floor(Math.random() * goodbyed.length)];
		botReply(randomGoodbyd)
	}
	
	if((processMessage.indexOf("why") >= 0) ||(processMessage.indexOf("which one") >= 0) ||(processMessage.indexOf("were") >= 0) ||(processMessage.indexOf("at what time") >= 0)) {
	var goodbye = [
		"How Can I Know😅",
		"You little monkey 😙",
		"I.d.k 😑",
		"I have no idea. You mess me up😂",
		"Lol 😋"
		];
	var randomGoodbye = goodb[Math.floor(Math.random() * goodbye.length)];
		botReply(randomGoodb)
	}
	
	
	





	if(processMessage.indexOf("time") >=0){
	var dateNow = new Date();
	var hour = dateNow.getHours();
	var minute = dateNow.getMinutes();
		botReply("The time is " + hour + ":" + minute + " at your current location.");
	}

  	if (processMessage.indexOf("/gif") > -1){
    var gifQuery = processMessage.replace("/gif ", "").split(" ").join("+");
  		getGIF(gifQuery);
  	}

}

function getGIF(input){
    $(".main-container").innerHTML = "";

	var giphySource = "http://api.giphy.com/v1/gifs/search?q=";
	var giphyKey = "&api_key=dc6zaTOxFJmzC";

	var giphySearch = giphySource + input + giphyKey;

	var giphyAJAXCall = new XMLHttpRequest();
	giphyAJAXCall.open("GET", giphySearch);
	giphyAJAXCall.send();

	giphyAJAXCall.addEventListener("load",function(e){
	var data = e.target.response;
	var response = JSON.parse(data);

	var imageUrls = response.data;

	imageUrls.forEach(function(image){

	var src = image.images.fixed_height.url;

	botReply("<img src=\"" + src + "\" class=\"gif-container\"></br>");

	});
});
}


$(document).ready(function(){

  $("#textbox").keypress(function(event){

  	if(event.which === 13){

  		if ($("#enter").prop("checked")){

  			$("#send").click();

  		event.preventDefault();
  	    }
  	}
  });

  $("#send").click(function(){

  	var userMessage = $("#textbox").val();
  	
  	$("#textbox").val("");

  	var defaultState = $("#main-container").html();

 	$("#main-container").html(defaultState + "<div class=\"bubble user-input\">" + userMessage + "</div></br>");

 	$("#main-container").scrollTop($("#main-container").prop("scrollHeight"));

  	var forBotProcess = userMessage.toString().toLowerCase();

	botAlgorithm(forBotProcess);

  });
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



document.getElementById('copyToClipboard-a').addEventListener('click', function() {
  
  var text = document.getElementById('textA');
  text.select();
  document.execCommand('copy');

})