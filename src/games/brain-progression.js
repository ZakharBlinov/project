#!/usr/bin/env node

import driver from '../index.js';
import getRandomNumber from './random.js';

const getProgression = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const progression = [];
  let definableNumber;
  const start = getRandomNumber(Math.random() * 10) + 1;
  const diff = getRandomNumber(Math.random() * 5) + 2; 
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  for (let i = 0; i < progressionLength; i++) {
    if (i === hiddenIndex) {
      progression.push('..');
      definableNumber = start + (i - 1) * diff;
    } else {
      const number = start + (i - 1) * diff;
      progression.push(number);
    }
  }
  const progression2 = progression.join(' ');
  return { progression2, definableNumber };
};
const question = 'What number is missing in the progression?';
const playGame = () => {
  const prog = getProgression(0, 10);
  const progression = prog.progression2;
  const questionTwo = `${progression}`;
  const rightAnswer = prog.definableNumber.toString();
  return { rightAnswer, questionTwo };
};
const playProgGame = () => driver(playGame, question);
export default playProgGame;
