
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
while (antal < 3) {
  //Ruta att skriva in sten, sax eller påse
  const userInput = prompt("Skriv sten (s), sax (x) eller påse (p)");
      console.log("Du valde: " + bokstavTillOrd(userInput));
  //Funktion som returnerar ett slumpmässigt val mellan sten, sax eller påse
  

  const datorVal = getComputerChoice();
  console.log("Datorn valde: " + bokstavTillOrd(datorVal));

  antal++;

  //om jag väljer sten och datorn väljer påse
if (userInput == "s" && datorVal == "p") {
  //då vinner datorn
  console.log("Datorn vann denna omgång");
}

//om jag väljer sten och datorn väljer sax
if (userInput == "s" && datorVal == "x") {
//då vinner jag
  console.log("Du vann denna omgång");
}

//om jag väljer sten och datorn väljer sten
if (userInput == "s" && datorVal == "s") {
//då blir det oavgjort
  console.log("Oavgjort");
}

//om jag väljer påse och datorn väljer sten
if (userInput == "p" && datorVal == "s") {
//då vinner jag
  console.log("Du vann denna omgång");
}

//om jag väljer påse och datorn väljer sax
if (userInput == "p" && datorVal == "x") {
//då vinner datorn
  console.log("Datorn vann denna omgång");
}

//om jag väljer påse och datorn väljer påse
if (userInput == "p" && datorVal == "p") {
//då blir der oavgjort
  console.log("Oavgjort");
}

//om jag väljer sax och datorn väljer sten
if (userInput == "x" && datorVal == "s") {
//då vinner datorn
  console.log("Datorn vann denna omgång");
}

//om jag väljer sax och datorn väljer påse
if (userInput == "x" && datorVal == "p") {
//då vinner jag
  console.log("Du vann denna omgång");
}

//om jag väljer sax och datorn väljer sax
if (userInput == "x" && datorVal == "x") {
//då blir det oavgjort
  console.log("Oavgjort");
}

}

if (userInput )
 console.log("")