const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "";
let correctAnswer = "";
let candidateAnswer = "";
let candidateScore = 0;
let questions = [
  "1. Who was the first American women in space?",
  "2. True or false: 5 kilometer == 5000 meters?",
  "3. (5 + 3)/2*10=  ", 
  '4. Given the array [8, "Orbit", "Trajectory", 45] what entry is at index 2? ', 
  "5. What is the minimum crew size for the ISS?"
  ];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ")
  console.log("Hello, " + candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer//
  //
  // candidate = input.question (question)
  for (let i = 0; i < questions.length; i++) { // 4 should be questions.length
    
    let candidateInput = input.question(`${questions[i]}`);
    candidateAnswers.push(candidateInput);
    console.log(`Your Answer: ${candidateInput} \n Correct Answer: ${correctAnswers[i]}`)
  if (candidateInput.toUpperCase() == correctAnswers[i].toUpperCase()){
    candidateScore++;
  }
}
}
function gradeQuiz() {
  // TODO 1.2c: Let the Candidate know if they have answered the question correctly or incorrectly // 


//let grade;
  //let gradedCorrectAnswers = 0;
 // for (let i = 0; i < questions.length; i++){
    //response = input.question(questions[i]);
  //if (response.toUpperCase() == candidateAnswer[i].toUpperCase()){
    //gradedCorrectAnswers++;
    //}
  //}
 
  let totalScore = (candidateScore / questions.length) * 100;
  console.log(candidateName);
  console.log("Correct Answers-  " + totalScore);
  console.log(totalScore + "% on test");
  
  if (totalScore >= 80 ){
    console.log(`>>>Status:PASSED <<<`)
  } else {
  console.log(`>>>Status:FAILED<<<`);
  }
}
  // return grade = (Numberof Correct Answers)/(Numberof Quiz Questions)*100;
// display questio[i]
    // ask for feedback - ie input.question...
    // store the answer by pushing to the correct answers array

  function runProgram() {
    askForName();
    // TODO 1.1c: Ask for candidate's name //

    askQuestion();
    gradeQuiz();
  }

  // Don't write any code below this line //
  // And don't change these or your program will not run as expected //
  module.exports = {
    candidateName: candidateName,
    question: question,
    correctAnswer: correctAnswer,
    candidateAnswer: candidateAnswer,
    questions: questions,
    correctAnswers: correctAnswers,
    candidateAnswers: candidateAnswers,
    gradeQuiz: gradeQuiz,
    runProgram: runProgram
  };