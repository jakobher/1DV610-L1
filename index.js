

function greeting() {
    const name = document.getElementById("nameInput").value
    document.getElementById("greeting").innerHTML = "Hello there <span class='name-highlight'>" + name + "</span>" + "! " + "Did you know that " + randomFact()
    document.getElementById("text").innerHTML = "Atleast you do now 😎"
}

function randomFact() {
    const facts = [
    "it took the creator of the Rubik’s Cube one month to solve the cube after he created it.",
    "a crocodile cannot stick its tongue out.",
    "it is physically impossible for pigs to look up into the sky.",
    "a cat has 32 muscles in each ear.",
    "giraffes are 30 times more likely to get hit by lightning than people."
    ]
    return facts[Math.floor(Math.random() * facts.length)]
} 
