function myFunction() {
    document.getElementById("demo").innerHTML = "First, I need to know your name";
    document.getElementById("prompt").style.display = 'block';
}
function submitname() {
    var x = document.getElementById("name").value;
    document.getElementById("submitname").innerHTML = "Hi " + x + ". What can I do for you?";
    document.getElementById("aftername").style.display = 'block';
    document.getElementById("aftername2").style.display = 'block';
    document.getElementById("aftername3").style.display = 'block';
    document.getElementById("aftername4").style.display = 'block';
    document.getElementById("aftername5").style.display = 'block';

    document.getElementById("aftername").onclick = function () {
        var myarray= new Array("Joke: What's the most positive thing about Switzerland? Their flag has a big plus!",
        "Joke: Why should you never trust stairs? Because they're always upto something!",
        "Joke: Why did the bullet end up losing his job? Because he got fired!",
        "Joke: How do you measure a snake? In inches, because they don't have feet!",
        "Joke: What gets wetter the more it dries? A towel!",
        "Joke: Where should you go in the room if you're feeling cold? You should go in the corner, because they're usually 90 degrees!",
        "Joke: You know why you never see elephants hiding up in trees? Because they're really good at it!",
        "Joke: Why don't blind people skydive? Because it scares their dogs!","Why don't scientists trust atoms? Because they make up everything!",
        "Joke: Why don't oysters donate to charity? Because they are shellfish!",
        "Joke: Why don't mathematicians like playing hide and seek? Because they can never find a solution!",
        "Joke: Why did the math book looked sad? Because it had too many problems!");
        var random = myarray[Math.floor(Math.random() * myarray.length)];
        document.getElementById("message").innerHTML=random;
    }
    document.getElementById("aftername4").onclick = function() {
        window.open("https://www.google.com/search?q=weather+forecast&rlz=1C1UEAD_enBD1062BD1062&oq=weather&aqs=chrome.0.69i59l2j69i57j0i402i650j46i67i199i465i650j0i67i650j0i67i131i433i650j0i67i650l2j0i131i433i512.1079j1j7&sourceid=chrome&ie=UTF-8");
    }
    document.getElementById("aftername2").onclick = function () {
        var myarray = new Array("Fact: There is a species of jellyfish called Turritopsis dohrnii, also known as the IMMORTAL JELLYFISH. It has the ability to revert back to its juvenile polyp stage after reaching adulthood, effectively cheating death and potentially living indefinitely.",
        "Fact: The first use of the Hashtag Symbol (#) as a social media tool was on Twitter in 2007.",
        "Fact: The driest place on Earth is the Atacama Desert in Chile. Some areas of the desert have received no rainfall in recorded history.",
        "Fact: The world's oldest known recipe is for beer",
        "Fact: There are more trees on Earth than stars in the Milky Way galaxy. Estimates suggest there are over three trillion trees on our planet.",
        "Fact: Octopuses have three hearts. Two hearts pump blood to the gills, while the third heart circulates blood to the rest of the body.",
        "Fact: The shortest war in history was between Britain and Zanzibar in 1896. It lasted only 38 minutes, with Zanzibar surrendering to British forces.",
        "Fact: Honey never spoils")
        var random = myarray[Math.floor(Math.random() * myarray.length)];
        document.getElementById("message").innerHTML=random;
    }
    document.getElementById("aftername5").onclick = function() {
        document.getElementById("options").style.display = 'block';
        document.getElementById("aftername6").style.display = 'block';
        document.getElementById("aftername7").style.display = 'block';
        document.getElementById("aftername8").style.display = 'block';
        document.getElementById("feedback").style.display = 'block';
    }
    document.getElementById("aftername6").onclick = function() {
        window.open("https://seaamcalculator.netlify.app/");
    }
    document.getElementById("aftername7").onclick = function() {
        window.open("https://analogclockbyseaam.netlify.app/");
    }
    document.getElementById("aftername8").onclick = function() {
        window.open("https://javascript-typewriter.netlify.app/");
    }
    document.getElementById("aftername3").onclick = function() {
        var myarray = new Array("Quote: That's one small step for a man, a giant leap for mankind  -  Neil Armstrong",
        "Quote: The love of money is the root of all evil.  -  the Bible",
        "Quote: The only thing we have to fear is fear itself.  -  Franklin D. Roosevelt",
        "Quote: Ask not what your country can do for you; ask what you can do for your country.  -  John Kennedy",
        "Quote: Genius is one percent inspiration and ninety-nine percent perspiration.  -  Thomas Edison")
        var random = myarray[Math.floor(Math.random() * myarray.length)];
        document.getElementById("message").innerHTML=random;
    }
    const typewriter = document.getElementById("header");
    const originalText = typewriter.textContent.trim();
    typewriter.textContent = "";

    let index = 0;

    function type() {
      typewriter.textContent += originalText.charAt(index);
      index++;

      if (index < originalText.length) {
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
      }
    }

    type();


}