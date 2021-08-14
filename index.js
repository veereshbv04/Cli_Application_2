var read = require("readline-sync");
const chalk = require("chalk");
console.log(chalk.greenBright("Welcome"));
const name = read.question("May I know your name please? ");
console.log(chalk.blueBright("***********************************************"));
console.log(chalk.yellow("Hi, " + name + " let's play the quiz"));
console.log(chalk.greenBright("For each correct answer you get 1 points, for each incoorect answer you get -1 "))

var questionsSet = [
  {question:"Which is the first state in India to genrate Elcetricity? ",answer:"Karnataka"},
  {question:"In which state, startup capital of India is located ? ",
  answer:"Karnataka"},
  {question:"How many districts does Karnataka have? ",
  answer:"28"},
  {question:"In Karnataka, when is Kannada Rajyotsava (Karnataka Formation Day) celebrated every year? ",answer:"November 1st"},
  {question:"Who built the Krishna Raja Sagara (KRS) dam? ",
  answer:"Sir M Visveswarayya"
  },
  {question:"Who introduced Vachana Sahitya (or Vachana literature) to South India? ",
  answer:"Basavanna"
  },
  {question:"Which of the following places is also known as Dwarasamudra? ",
  answer:"Banavasi"
  },
  {question:"Of the 26 World Heritage Sites identified by UNESCO in India, how many are in Karnataka? ",
  answer:"2"
  },
  {question:"Which National Park is located 80 kms from Mysore? ",
  answer:"Bandipur"
  },
  {question:"Karnataka and Maharashtra have had a border dispute over which of the following places? ",
  answer:"Belgaum"
  },
  {question:"Who is considered as the architect of modern Bangalore? ",
  answer:"Kempe Gowda"
  },
  {question:"In Karnataka, what is Kadalekai Parishe? ",
  answer:"a fair"
  },
  
]

var score = 0;

function play(question,answer){
  var userAnswer = read.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score = score + 1;
    console.log(chalk.blue("your answer " + userAnswer + " is correct"));
    console.log(chalk.yellow("Your current score is " + score));
    console.log(chalk.blueBright("***********************************************"));
    console.log(" ");

  }else{
    score = score - 1;
    console.log(chalk.blue("Your answer " + userAnswer + " is incorrect"));
    console.log(chalk.yellow("correct answer is " + answer + "." + " current score is " + score));
    console.log(chalk.blueBright("***********************************************"));
    console.log(" ");
  }

}

for(let i=0; i<questionsSet.length;i++){
  var currentquestion = questionsSet[i];
  play(currentquestion.question, currentquestion.answer);
}

console.log(chalk.greenBright("Thank you, for taking this quiz. Your total score is " + score  ));
console.log(chalk.cyan("To know about me, Check out my portfolio", chalk.yellow("veereshbv.netlify.com")));