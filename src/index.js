import readlineSync from 'readline-sync';

const playGame = (runGame, question) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(question);
  let count = 0;
  while (count < 3) {
    const { rightAnswer, questionTwo } = runGame();
    console.log(`Question: ${questionTwo}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === yourAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`Your answer is a wrong answer ;(. Correct answer "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
