
function bokstavTillOrd(val) {
  if (val == "x") return "sax";
  if (val == "s") return "sten";
  if (val == "p") return "påse";
  return "okänt";
}

function getComputerChoice() {
  const choices = ["s", "x", "p"];
  return choices[Math.floor(Math.random() * choices.length)];
      
  }


  
let antal =0;
let scoreUser = 0;
let scoreDator = 0;

//Loop som kör spelet 3 gånger
while (antal < 3) {
  //Ruta att skriva in sten, sax eller påse
  const userInput = prompt("Skriv sten (s), sax (x) eller påse (p)");
    //skriv ut: Du valde:
    console.log("Du valde: " + bokstavTillOrd(userInput));
  
  
  //Datorn returnerar ett slumpmässigt val mellan sten, sax eller påse
  const datorVal = getComputerChoice();
    //skriv ut: Datorn valde:
    console.log("Datorn valde: " + bokstavTillOrd(datorVal));

  antal++;

  //om jag väljer sten och datorn väljer påse
  if (userInput == "s" && datorVal == "p") {
    //då vinner datorn
    console.log("Ditt poäng: 0");
    scoreDator = scoreDator + 1;
  }

  //om jag väljer sten och datorn väljer sax
  if (userInput == "s" && datorVal == "x") {
    //då vinner jag
    console.log("Ditt poäng: 1");
    scoreUser = scoreUser + 1;
  }

  //om jag väljer sten och datorn väljer sten
  if (userInput == "s" && datorVal == "s") {
    //då blir det oavgjort
    console.log("Ditt poäng: 0 (Oavgjort)");
  }

  //om jag väljer påse och datorn väljer sten
  if (userInput == "p" && datorVal == "s") {
    //då vinner jag
    console.log("Ditt poäng: 1");
    scoreUser = scoreUser + 1;
  }

  //om jag väljer påse och datorn väljer sax
  if (userInput == "p" && datorVal == "x") {
    //då vinner datorn
    console.log("Ditt poäng: 0");
    scoreDator = scoreDator + 1;
  }

  //om jag väljer påse och datorn väljer påse
  if (userInput == "p" && datorVal == "p") {
    //då blir der oavgjort
    console.log("Ditt poäng: 0 (Oavgjort)");
  }

  //om jag väljer sax och datorn väljer sten
  if (userInput == "x" && datorVal == "s") {
    //då vinner datorn
    console.log("Ditt poäng: 0");
    scoreDator = scoreDator + 1;
  }

  //om jag väljer sax och datorn väljer påse
  if (userInput == "x" && datorVal == "p") {
    //då vinner jag
    console.log("Ditt poäng: 1");
    scoreUser = scoreUser + 1;
  }

  //om jag väljer sax och datorn väljer sax
  if (userInput == "x" && datorVal == "x") {
    //då blir det oavgjort
    console.log("Ditt poäng: 0 (Oavgjort)");
  }
  //om jag väljer okänt 
  if (bokstavTillOrd(userInput) == "okänt") {
    //0 poäng
    console.log("Ditt poäng: 0 (ogiltigt svar)");
    scoreDator = scoreDator + 1;
}
}

//om jag får 3 poäng
if (scoreUser == 3) {
  //skriv ut: 
  console.log("Awesome spelat! Du vann alla omgångar!");

//annars om datorn får 3 poäng
} else if (scoreDator == 3) {
  //skriv ut:
  console.log("Datorn vann alla omgångar, bättre lycka nästa gång!");

//om jag får mer än 2 poäng
} else if (scoreUser == 2) {
  //skriv ut:
  console.log("Wohoo, bra spelat!! Du vann!");

//annars om datorn får mer än 2 poäng
} else if (scoreDator == 2) {
  //skriv ut:
  console.log("Datorn var listigare än dig denna omgång.");

  
//annars om jag får mer än 0 poäng och datorn får mindre än 1 poäng
} else if (scoreUser == 1 && scoreDator == 0) {
  //skriv ut:
  console.log("Grattis! Du vann med 1 poäng");

//annars om datorn får mer än 0 poäng och jag får mindre än 1 poäng
} else if (scoreDator == 1 && scoreUser == 0) {
  //skriv ut:
  console.log("Tyvärr, datorn vann med 1 poäng");
}



