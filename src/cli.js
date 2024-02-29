import readlineSync from 'readline-sync';
import brainScm from './games/brain-scm.js';
import brainProgression from './games/brain-progression.js';

export default function greetUser() {
  const games = {
    1: { name: 'Brain Scm', game: brainScm },
    2: { name: 'Brain Progression', game: brainProgression },
  };

  console.log('Please choose the game you want to play:');

  Object.keys(games).forEach((key) => {
    console.log(`${key}. ${games[key].name}`);
  });

  const choice = readlineSync.question('Enter the number of the game you want to play: ');

  if (games[choice]) {
    console.log(`You've chosen ${games[choice].name}! Let's play it.`);
    games[choice].game();
  } else {
    console.log('Invalid choice. Please enter a valid number.');
  }
}
