/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProgression(length) {
  const progression = [];
  const initialNumber = getRandomNumber(2, 5);
  const commonRatio = getRandomNumber(2, 5);
  for (let i = 0; i < length; i++) {
    progression.push(initialNumber * commonRatio ** i);
  }
  return progression;
}
export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! What number is missing in the progression?`);

  let correctAnswersCount = 0;
  const roundsToWin = 3;

  while (correctAnswersCount < roundsToWin) {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 20);
    const difference = Math.floor(Math.random() * 10) + 1;
    const hiddenIndex = Math.floor(Math.random() * length);

    const progression = generateProgression(length, start, difference);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount === roundsToWin) {
    console.log(`Congratulations, ${name}!`);
  }
};
