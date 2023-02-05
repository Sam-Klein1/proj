let orbs = document.getElementsByClassName('category-orb');
let output = document.getElementById('output');
let romanticWords = [
    "adorable",
    "amazing",
    "angel",
    "beautiful",
    "beloved",
    "better half",
    "bewitching",
    "crazy for you",
    "darling",
    "dearest",
    "enchanting",
    "enthralling",
    "friend and lover",
    "gorgeous",
    "handsome",
    "heavenly",
    "intoxicating",
    "life-changing",
    "main squeeze",
    "my everything",
    "paramour",
    "sweetheart",
    "swoon",
    "wonderful"
]
let financialWords = [
    "Accounts Payable",
    "Accounts Receivable",
    "Asset",
    "Balance Sheet",
    "Cash Flow",
    "Fixed Asset",
    "Income Statement",
    "Liability",
    "Profit & Loss Statement",
    "Annual Percentage Rate",
    "Collateral",
    "Loan-to-Value",
    "Debt-Service Coverage Ratio",
    "Personal Guarantee",
    "Financial Statements",
    "Debt Consolidation",
    "Gross Profit",
    "Statement of Cash Flow",
    "Credit Limit",
    "Interest Rate",
    "Investment",
    "External capital",
    "Cash outflow",
    "Revenue",
    "Profit",
    "Recessions",
    "Debt",
    "Collateral",
    "Mortgage",
    "Short-term loan",
    "Long-term loan",
    "Credit rating",
    "Overdraft",
    "Shares",
    "Stocks",
    "Rally",
    "Bull market",
    "Bear market"
]
// list of CareerAdviceWords
let carrerAdviceWords = [
    "great work",
    "I'm possible",
    "don't stop",
    "try harder",
    "to be of value",
    "self-reflection",
    "adaptability ",
    "communication skills",
    "time managemen",
    "proactivity",
    "resilience",
    "goal setting",
    "collaboration",
    "passion",
    "professionalism",
    "victory"

]
// list of CareerAdviceVerbs
let careerAdviceVerbs = [
   "network",
   "learn",
   "grow",
   "persevere",
   "adapt",
   "innovate",
   "collaborate",
   "diversify",
   "specialize",
   "prioritize",
   "analyzed",
   "explored",
   "qualified",
   "be flexible",
   "persevere",
   "learn continuously",
   "enhanced",
   "furthered",
   "improved"
]

//list of Friendship verbs
let friendVerbs = [
    "bond",
    "connect",
    "unite",
    "socilize",
    "support",
    "encourage",
    "trust",
    "respect",
    "strike up",
    "share",
    "friended"
]

let friendWords = [
    "camaraderie",
    "companionship",
    "affinity",
    "rapport",
    "loyalty",
    "mutual support",
    "mutual repsect",
    "closeness",
    "acceptance",
    "lasting"
]

//List of school advice
let schoolWords = [
    "study",
    "procrastinate",
    "stress",
    "sleep",
    "use ChatGPT",
    "sleep in",
    "read",
    "pretend to work",
    "HELP, I'M STuc...",
    "breakdown",
    "explore"
]
//List of clothing
let clothingWords = [
    "shirt",
    "pants",
    "shoes",
    "shorts",
    "dress",
    "hat",
    ""
]
//List of clothing adjuctives
let clothingAdj = [
    "purple",
    "red",
    "blue",
    "yellow",
    "green",
    "lavender",
    "pink",
    "fluffy",
    "silky",
    "shiny",
    "stretchy",
    "spiffy",
    "pompus",
    "80's",
    "tight",
    "loose"
]
//List of life advice words
let lifeWords = [
    "sleep",
    "water drinking",
    "love",
    "passive-comments",
    "conforming",
    "complacent",
    "runing... don't stop..",
    "smile",
    "bottle up",
    "complaining",
    "HELP, I'M TRAPed.."
]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function hideOrbs(){
    for(let i = 0; i < orbs.length;i++){
        orbs[i].style.display = "none";
    } 
}
function sendString(str) {
    fetch('/tts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({string: str})
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
function makeString(){
    let command = this.getElementsByTagName("p")[0].textContent;
    console.log(command);
    let outputString = "";
    if(command == "Romantic  Advice"){
        hideOrbs();
        let randomPhrase = getRandomInt(5);
        let randomWord  = romanticWords[getRandomInt(romanticWords.length-1)];
        let randomWord2  = romanticWords[getRandomInt(romanticWords.length-1)]; 
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "So " + randomWord + ", your love will bloom in the springtime when " + randomWord2 + " is ready for computer love.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 1:
                output.textContent = "Your admirer " + randomWord + " actively awaits outside your window.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 2:
                output.textContent = "You shall fall head over heel for your " + randomWord + " love in the morning after yonder yester fortnight.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 3:
                output.textContent = "You will need to " + randomWord + " to " + randomWord2 ;
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 4:
                output.textContent = "Thy " + randomWord + " love shall be requited within the next " + getRandomInt(40) + " years.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 5:
                output.textContent = "Be wary of those in " + clothingAdj[getRandomInt(15)] + " " + clothingWords[getRandomInt(4)] + ", for one has a secret surprise for you.";
                outputString = output.textContent;
                sendString(outputString);
                return;
        }
        
    }else if(command == "Financial  Advice"){
        output.textContent = "Financial"; 
        hideOrbs();
        let randomPhrase = getRandomInt(4);
        let randomWord  = financialWords[getRandomInt(financialWords.length-1)];
        randomWord.toLowerCase();
        let randomWord2  = financialWords[getRandomInt(financialWords.length-1)]; 
        randomWord2.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Be sure to wear your socks inside out to ensure " + randomWord + " does not liquidate your " + randomWord2 + " leading to economic collapse.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 1:
                output.textContent = "Always bet on " + randomWord + " multiplying your money twentytwofold.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 2:
                output.textContent = "Don't hire a financial advisor, investing in " + randomWord + " will " + randomWord2 + " which will ensure a retirement in your 90s.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 3:
                output.textContent = "Paying  off your " + randomWord + " is essential in preventing blood sucking debt collectors";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 4:
                output.textContent = "The crypto market, evolving the field of " + randomWord + ", will set you free (of all your money).";
                outputString = output.textContent;
                sendString(outputString);
                return;
        }
    }else if(command == "Career  Advice"){
        output.textContent = "Career";
        hideOrbs();
        let randomPhrase = getRandomInt(7);
        let randomWord  = careerAdviceWords[getRandomInt(careerAdviceWords.length-1)];
        randomWord.toLowerCase();
        let randomWord2  = careerAdviceWords[getRandomInt(careerAdviceWords.length-1)]; 
        randomWord2.toLowerCase();
        let randomVerb  = careerAdviceVerbs[getRandomInt(careerAdviceVerbs.length-1)]; 
        randomVerb.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Be sure to participate in company " + randomWord + " in order to  " + randomWord2 + " leading to economic collapse.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 1:
                output.textContent = "Always bet on " + randomWord + " multiplying your money twentytwofold.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 2:
                output.textContent = "Don't hire a financial advisor, investing in " + randomWord + " will " + randomWord2 + " which will ensure a retirement in your 90s.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 3:
                output.textContent = "Paying  off your " + randomWord + " is essential in preventing blood sucking debt collectors";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 4:
                output.textContent = "Success in a career is not just about " + randomWord + " but it's not also about " + randomWord2 + ".";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 5:
                output.textContent = "Your career is a" + randomWord2 + "not just a " + randomWord + " and it's up to you to chart " + randomWord + ".";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 6:
                output.textContent = "Finding balance between your" + randomVerb + " and " + randomWord2 + "is crucial for success in your career.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 7:
                output.textContent = "You are not gonna succeed practice with " +  randomWord2 + " and " + randomVerb + ".";
                outputString = output.textContent;
                sendString(outputString);
                return;
        }
    }else if(command == "Life  Advice"){
        output.textContent = "Life";
        hideOrbs();
        let randomPhrase = getRandomInt(3);
        let randomWord  = lifeWords[getRandomInt(lifeWords.length-1)];
        randomWord.toLowerCase();
        let randomAdj = clothingAdj[getRandomInt(clothingAdj.length-1)];
        randomAdj.toLowerCase();
        let randomClothes = clothingWords[(clothingWords.length-1)];
        randomClothes.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Make sure to " + randomWord + " around others, they need that.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 1:
                output.textContent = "Next time you " + randomWord + " in " + randomClothes + ", expect a fulfilling day!";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 2:
                output.textContent = "Life is like a Dallas Cowboys game, " + randomWord + " will make it better.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 3:
                output.textContent = "With enough " + randomWord + ", your day will be brighter!";
                outputString = output.textContent;
                sendString(outputString);
                return;
        }
    }else if(command == "School  Advice"){
        output.textContent = "School";
        hideOrbs();
        let randomPhrase = getRandomInt(4);
        let randomWord  = schoolWords[getRandomInt(schoolWords.length-1)];
        randomWord.toLowerCase();
        let randomAdj = clothingAdj[getRandomInt(clothingAdj.length-1)];
        randomAdj.toLowerCase();
        let randomClothes = clothingWords[(clothingWords.length-1)];
        randomClothes.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Make sure to " + randomWord + " every school night to prepare for the next day.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 1:
                output.textContent = "Come next Thursday, fortune befalls those in " + randomAdj + " " + randomClothes + " on campus.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 2:
                output.textContent = "Plan to " + randomWord + " at least " + getRandomInt(4) + " times next week... you've been warned...";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 3:
                output.textContent = "All the best CS students " + randomWord + " before tests, trust me.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 4:
                output.textContent = "For academic luck this work, don't forget your " + randomAdj + " " + randomClothes + ", hope you (finally) did laundry this week.";
                outputString = output.textContent;
                sendString(outputString);
                return;
        }
    }else if(command == "Friendship Advice"){
        output.textContent = "Friendship";
        hideOrbs();
        let randomPhrase = getRandomInt(5);
        let randomWord  = friendVerbs[getRandomInt(friendVerbs.length-1)];
        randomWord.toLowerCase();
        let randomWord2  = friendVerbs[getRandomInt(friendVerbs.length-1)];
        randomWord2.toLowerCase();
        let randomVerb  = friendWords[getRandomInt(friendWords.length-1)]; 
        randomVerb.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "friendship will be like " + randomVerb + " and " + randomWord + ".";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 1:
                output.textContent = "You substain friendship through your " + randomVerb + ".";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 2:
                output.textContent = "Why would you maintain friendship through " + randomVerb + " and practice with " + randomWord2;         
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 3:
                output.textContent = "A true friend is someone who brings" + randomVerb + "and " + randomWord + ".";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 4:
                output.textContent = "Friendship is a"  + randomVerb  + " and " + randomWord2 + " that lasts a lifetime.";
                outputString = output.textContent;
                sendString(outputString);
                return;
            case 5:
                output.textContent = "Friendship is not about " + randomWord + " and not about " + randomVerb + ".";
                outputString = output.textContent;
                sendString(outputString);
                return;
        }
    }
} 

for(let i = 0; i < orbs.length;i++){
    orbs[i].addEventListener('click',makeString);
}