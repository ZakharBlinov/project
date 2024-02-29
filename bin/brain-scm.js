#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const lcm = (a, b) => (a * b) / gcd(a, b);

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the smallest common multiple of given numbers.');

let correctAnswers = 0;

const getRandomNumber = () => Math.floor(Math.random() * 50) + 1;

const playGame = () => {
  while (correctAnswers < 3) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

    const result = lcm(lcm(num1, num2), num3);
    const question = `${num1} ${num2} ${num3}`;

    console.log(`Question: ${question}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === result) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();
