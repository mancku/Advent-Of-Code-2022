const rockPaperScissors = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const losing = 0;
const drawing = 3;
const winning = 6;

const elfGame = {
  rock: "A",
  paper: "B",
  scissors: "C"
};

const myGame = {
  rock: "X",
  paper: "Y",
  scissors: "Z"
};

const mySecondGame = {
  lose: "X",
  draw: "Y",
  win: "Z"
};

export function solvePuzzle() {
  let puzzle1Solution = 0;
  let puzzle2Solution = 0;
  const lines = calories().split('\n');
  for (let stragegy of lines) {
    stragegy = stragegy.trim();

    const elfKey = stragegy[0];
    const myKey = stragegy[2];
    const elfPlay = getEnumValueByKey(elfGame, elfKey);
    const myPlay = getEnumValueByKey(myGame, myKey);

    puzzle1Solution += rockPaperScissors[myPlay]
      + getScoreFromPuzzleOne(elfPlay, myPlay);

    puzzle2Solution += getScoreFromPuzzleTwo(elfPlay, myKey);
  }

  console.log(`My score is ${puzzle1Solution} points.`);
  console.log(`My second score is ${puzzle2Solution} points.`);
};


function getScoreFromPuzzleOne(elfPlay, myPlay) {
  if (elfPlay === myPlay) {
    return drawing;
  }
  else {
    return myRoundScore(elfPlay, myPlay);
  }
}

/**
 * @param {string} elfPlay
 * @param {string} myKey
 */
function getScoreFromPuzzleTwo(elfPlay, myKey) {
  if (myKey === mySecondGame.draw) {
    return drawing + rockPaperScissors[elfPlay];
  }
  else if (myKey === mySecondGame.win) {
    switch (elfPlay) {
      case getEnumValueByKey(rockPaperScissors, rockPaperScissors.rock):
        return winning + rockPaperScissors.paper;
      case getEnumValueByKey(rockPaperScissors, rockPaperScissors.scissors):
        return winning + rockPaperScissors.rock;
      case getEnumValueByKey(rockPaperScissors, rockPaperScissors.paper):
        return winning + rockPaperScissors.scissors;
    }
  } else {
    switch (elfPlay) {
      case getEnumValueByKey(rockPaperScissors, rockPaperScissors.rock):
        return losing + rockPaperScissors.scissors;
      case getEnumValueByKey(rockPaperScissors, rockPaperScissors.scissors):
        return losing + rockPaperScissors.paper;
      case getEnumValueByKey(rockPaperScissors, rockPaperScissors.paper):
        return losing + rockPaperScissors.rock;
    }
  }
}

/**
 * @param {string} elfPlay
 * @param {string} myPlay
 */
function myRoundScore(elfPlay, myPlay) {
  const elfNumber = rockPaperScissors[elfPlay];
  const myNumber = rockPaperScissors[myPlay];

  let elfWins = true;
  elfWins = elfWins && elfNumber > myNumber;
  elfWins = elfWins ||
    (elfPlay === getEnumValueByKey(rockPaperScissors, rockPaperScissors.rock)
      && myPlay === getEnumValueByKey(rockPaperScissors, rockPaperScissors.scissors))

  elfWins = elfWins &&
    !(elfPlay === getEnumValueByKey(rockPaperScissors, rockPaperScissors.scissors)
      && myPlay === getEnumValueByKey(rockPaperScissors, rockPaperScissors.rock))

  return elfWins ? losing : winning;
}

/**
 * @param {{ [x: string]: any; rock?: string | number; paper?: string | number; scissors?: string | number; }} enumerator
 * @param {string | number} key
 */
function getEnumValueByKey(enumerator, key) {
  return Object.keys(enumerator).find(x => enumerator[x] === key);
}

// https://stackoverflow.com/a/46747018
function calories() {
  return `B Z
  A Z
  B Z
  C Z
  C Z
  B X
  A X
  C X
  A Z
  C Y
  C X
  C Y
  C Y
  A X
  A Z
  A Z
  A X
  B Z
  B X
  A Z
  A X
  C Y
  A X
  B Z
  B Z
  A X
  C Z
  A Z
  A X
  B Z
  A Z
  A Y
  C Y
  A Z
  C Z
  A Z
  C Y
  C Z
  C Z
  A Z
  A X
  A X
  B X
  A Z
  B Z
  A X
  A Z
  A Z
  A X
  A X
  C Y
  A Z
  B X
  C Y
  A X
  B Y
  A Z
  A X
  A Z
  A X
  C Z
  A Z
  A Y
  A X
  C Y
  A X
  B X
  A X
  A Z
  C Y
  A Z
  A X
  C X
  C Z
  C Z
  A Z
  A X
  A Z
  C X
  C Z
  B Z
  A Z
  C Y
  C Z
  B X
  A X
  A Z
  A X
  A X
  C Y
  A Z
  C Z
  B X
  A X
  A X
  A Z
  A Y
  A X
  C X
  A Z
  B X
  C Y
  A X
  A X
  A X
  C X
  B Z
  B Z
  A Z
  A X
  A Z
  C Z
  C X
  C Y
  B X
  C Z
  A Z
  C X
  A Z
  A X
  A X
  A X
  A X
  A Z
  B X
  A X
  B X
  C Z
  A Z
  A Z
  A X
  A X
  A X
  B X
  A Z
  A X
  A Z
  A X
  B Z
  A Z
  A X
  B Z
  A Z
  A Z
  C Y
  B Z
  A Z
  B Z
  A Z
  A X
  C X
  A X
  C Y
  C X
  A X
  A X
  C Y
  A Z
  A X
  B Z
  A Z
  A Z
  B X
  B Z
  A X
  A Z
  A X
  A X
  A Z
  A X
  A Z
  A Z
  C X
  A Z
  A X
  C Y
  A Z
  A Z
  A X
  A X
  A X
  A X
  B Z
  B X
  A Z
  A X
  A Z
  C Y
  B Y
  C Y
  B X
  A Z
  A Z
  A Z
  C Y
  A Z
  A X
  B Z
  C X
  A X
  C Z
  C X
  C Y
  A Z
  A X
  A Z
  C Z
  A Z
  A Z
  A Y
  C Z
  A X
  A X
  B Z
  A Z
  C Z
  A Z
  A X
  A Z
  A Z
  A Z
  A Z
  A Z
  A Z
  A Z
  A Z
  C X
  A X
  A X
  A X
  B Y
  B X
  A X
  A Z
  A Z
  A X
  A Z
  A X
  A X
  A Z
  B X
  A Z
  C Z
  A Z
  C Z
  A Z
  A Z
  C Z
  A X
  C Z
  A X
  C X
  A Z
  A Z
  B Z
  A Y
  B Z
  A X
  B Z
  A Z
  A X
  A Z
  A Z
  A X
  A Z
  B Z
  C X
  A Z
  A X
  B Z
  C Y
  B Z
  C X
  A Z
  A Z
  C X
  B X
  C Z
  A Z
  A X
  A Z
  C X
  A Z
  C Z
  C Z
  B Z
  B Z
  A Z
  C X
  A X
  B Y
  A Y
  A Z
  C X
  B X
  A Z
  A Z
  B Y
  A Z
  A Z
  C Z
  A Z
  A X
  A Z
  B X
  C Z
  B X
  A Z
  B Z
  C Y
  A X
  A X
  A Z
  A Z
  A Z
  C Y
  A X
  A Z
  A Z
  A X
  B Z
  A Z
  C X
  C Z
  A Z
  A X
  B Z
  A X
  C Y
  A X
  A Z
  A Y
  C Z
  A Y
  A Z
  C X
  C Y
  A Z
  C Y
  A Z
  A X
  C Y
  A Z
  A X
  A X
  B Z
  A X
  C X
  A X
  C X
  A X
  A Z
  A X
  A Z
  A Z
  A X
  C X
  C Z
  A Z
  C Z
  C X
  A Z
  C Y
  A X
  A Z
  A Z
  C Y
  A X
  B X
  C Y
  B Z
  C Y
  A X
  A X
  C Z
  A X
  A Z
  A X
  A X
  C X
  A X
  A Z
  B X
  C Z
  A Y
  B Y
  A Z
  A Z
  A Z
  A Z
  B Y
  A Y
  A Z
  B Z
  A Z
  A X
  C Z
  B Y
  C Y
  A X
  A Z
  C Z
  B Z
  A Z
  A Z
  A Y
  C Z
  A Z
  A Z
  C Z
  C Z
  C Z
  A X
  B Y
  C X
  A X
  A Z
  A Z
  B Z
  A Y
  A X
  A Z
  B X
  A X
  A X
  A Z
  A Y
  A Z
  A X
  B X
  A Z
  C X
  A Z
  A X
  C X
  B X
  B Y
  B X
  A Z
  A Z
  A Z
  A X
  B X
  A X
  B Z
  A Y
  B Z
  C Z
  A X
  C Z
  C X
  A Z
  C Y
  C Y
  A Z
  A X
  A X
  A X
  B X
  A Z
  A Y
  C Y
  B X
  A X
  A X
  A X
  C Y
  A Z
  A Y
  A X
  C Z
  A Z
  A Z
  A Z
  C Z
  A X
  A Z
  C Z
  B X
  C Y
  A Z
  B Z
  B Z
  C Z
  C Z
  A X
  A Z
  A Z
  B X
  B X
  A Z
  A Z
  A Y
  C Z
  A Z
  A X
  C Z
  A Z
  C Z
  C Z
  A Z
  A Z
  B Z
  A X
  B Y
  A Z
  A X
  C Z
  A X
  B X
  A Z
  C Y
  A Z
  C X
  C Y
  A X
  C X
  C X
  A Z
  C Z
  C Y
  A Z
  A Z
  A X
  A X
  C Z
  A Y
  A Z
  A X
  B Z
  A X
  A Z
  A Z
  A X
  B Z
  A X
  A Z
  C X
  A Z
  A Z
  C X
  A Z
  A X
  A Z
  A X
  B Z
  A Z
  A Z
  C Y
  C Y
  C Z
  C Z
  C Y
  A X
  A X
  A X
  A Z
  A Z
  C Y
  A Z
  C Z
  A Z
  C Z
  B Z
  B X
  A Y
  C Y
  A X
  A Z
  A X
  A X
  A Z
  C Z
  C Y
  C Y
  A Y
  A X
  A Z
  A X
  C Z
  A X
  A Z
  A Z
  C Y
  A X
  A Z
  A Z
  A X
  B Y
  A Z
  A Z
  A Z
  A Z
  C Y
  A Z
  A X
  A X
  A Z
  A Z
  C Y
  A Z
  A Z
  B Z
  A Z
  A X
  A X
  A Y
  C Z
  C Z
  A Z
  B Z
  A Z
  A Z
  A X
  A X
  C Z
  A Z
  A X
  A X
  A Z
  A Z
  B Y
  A Y
  C Y
  A X
  A Z
  C Z
  C Y
  A Z
  C Y
  A X
  A X
  A X
  A Z
  C Y
  C Y
  A Z
  B X
  C Y
  A Z
  A X
  A Z
  A Y
  C Y
  C Z
  B Z
  A Z
  C Y
  A X
  C Z
  A X
  C Y
  C Z
  A Z
  C Y
  C Y
  A Y
  B X
  A Z
  C Z
  B Z
  B Y
  A Z
  C Y
  A X
  A Z
  A Z
  C Y
  A Z
  C Z
  A Z
  A Z
  A X
  A Z
  A Z
  C Z
  A X
  A Z
  C Z
  C Y
  A X
  A X
  C Z
  C Y
  A Z
  C Y
  A Z
  A X
  A X
  A Z
  A Z
  A X
  A Z
  C Y
  C Z
  A Z
  B X
  C Z
  A Z
  A Z
  A X
  B X
  A Z
  A Y
  A X
  C Z
  B X
  A Z
  C Y
  C Z
  C Z
  C Z
  A Z
  A Z
  A X
  A Z
  C Z
  C Y
  A X
  A Z
  A Z
  A Y
  A X
  A Z
  A Z
  C X
  B Z
  A X
  A Z
  A X
  C Z
  A X
  C X
  A X
  C Y
  C Y
  A X
  A X
  A Z
  B Z
  A Z
  A Y
  B Z
  A X
  C X
  A X
  C X
  A X
  C X
  A Z
  A X
  A X
  A X
  C Y
  A X
  A X
  C X
  C Z
  A X
  B Y
  A X
  B Z
  A Z
  A X
  C Z
  A Z
  A X
  A Z
  A X
  C X
  C Z
  A X
  C Z
  C Y
  C Y
  A X
  A X
  A X
  C Z
  C Z
  A Z
  C Z
  A Z
  B Z
  A Y
  B Z
  A X
  A Z
  A Z
  A Z
  C Z
  A Z
  A X
  A X
  B Z
  A Z
  C Y
  C Z
  B Z
  C Y
  C Z
  A X
  A X
  C X
  B X
  C Z
  A Z
  A Z
  C Z
  A X
  A Z
  A Z
  B X
  B Z
  A Z
  A Z
  B Z
  A Z
  A Z
  B Z
  B Z
  C Z
  A Z
  C Z
  A Z
  A Z
  C Z
  A Z
  A Z
  B Z
  A Z
  A X
  A X
  A X
  A Z
  C Z
  A X
  A Z
  A X
  A Z
  B Z
  B Z
  C Z
  A Z
  A Y
  C X
  A X
  A Z
  A X
  A X
  C X
  C Z
  B Y
  A X
  A X
  C Y
  C Y
  A X
  A Z
  A Z
  B Z
  B Z
  A Z
  C Z
  A Z
  C Z
  C X
  A Z
  A X
  A Y
  A X
  A Z
  C Z
  A X
  A Z
  A Z
  A Z
  A X
  C X
  B Z
  A Z
  A Y
  C X
  A Z
  A Z
  A Z
  A X
  A Y
  A X
  C Y
  A Z
  C Y
  A Z
  A Z
  C X
  A Z
  A Y
  C Z
  A X
  A X
  A Z
  A Y
  A Z
  A X
  C Z
  A Z
  A Z
  B Z
  A Z
  A Z
  C X
  B Z
  C Y
  A X
  A Y
  B X
  A Z
  C Z
  C X
  C Z
  A X
  A X
  A Z
  A Z
  A X
  A Z
  B Z
  B Z
  A Z
  B Y
  B Z
  A X
  A X
  C Z
  A Z
  C Y
  B Z
  C Z
  C Z
  A Z
  A X
  B Z
  A X
  A X
  A Z
  A Z
  A X
  B Z
  A Z
  C Z
  A Z
  A Z
  B X
  C Z
  B Z
  C Y
  A Z
  A X
  A X
  B X
  A X
  B Z
  C Y
  C Y
  B Z
  C Y
  C Y
  A X
  A Z
  A Z
  C Y
  B Z
  A X
  A Z
  A X
  B X
  A X
  C Y
  A X
  A X
  B Z
  A X
  B X
  A Z
  C Y
  B Z
  A X
  A Z
  A X
  A X
  B X
  A X
  A X
  A X
  A Z
  A Z
  C Y
  A Z
  B Z
  C Z
  C Y
  C Z
  A X
  A Z
  A X
  C Z
  C Z
  C Z
  C Y
  A X
  B X
  B X
  C X
  C Z
  C X
  C Z
  B Z
  A Y
  A X
  C X
  B X
  A X
  A X
  A Z
  A X
  A Z
  A X
  A X
  A Z
  A Z
  C Z
  A X
  C Y
  C Y
  C Z
  A Z
  A X
  A Z
  A X
  A Z
  A Y
  A Z
  A X
  A X
  A Z
  A X
  A Y
  A Y
  C X
  A Y
  C Y
  C X
  A Z
  C Z
  C Y
  C Z
  A Z
  C X
  A X
  C Z
  A Z
  C Y
  B Z
  A Z
  A Z
  A Z
  C Y
  A X
  A X
  A Z
  A Z
  A Z
  B Z
  C Z
  A X
  C Y
  A X
  A Z
  A X
  C X
  C Z
  A Z
  C Y
  A Y
  A Y
  A Z
  A X
  A Z
  A Y
  A X
  C Z
  A Z
  A Z
  A X
  A X
  B Z
  B Y
  B Y
  C X
  A Z
  A Z
  C Z
  A X
  A Z
  C Y
  B X
  C Y
  A Z
  A Z
  A X
  A Z
  A X
  A X
  C Z
  A Z
  A Z
  A X
  A X
  C Y
  A X
  A X
  C Y
  A Y
  C X
  A X
  C Y
  A Y
  A Z
  B Y
  A X
  C Z
  B X
  A X
  C Z
  A Z
  B Z
  A Z
  A Z
  C X
  A Z
  B Z
  C X
  A Z
  C Y
  A Z
  C Z
  A Z
  C X
  A X
  A Z
  A Y
  B X
  A X
  B X
  A Z
  A Z
  C Y
  A Z
  C Z
  A Z
  A Z
  A Z
  C X
  A Z
  B X
  A X
  A Z
  C Z
  A Z
  A X
  C Y
  A Z
  C Y
  A Z
  A Z
  C Z
  A X
  A Z
  A Z
  B X
  A Z
  A X
  C Z
  B Y
  A Z
  A X
  C Z
  A X
  A Z
  A Z
  A Z
  C Z
  A Z
  A Z
  C X
  A X
  A X
  C X
  A X
  A X
  B Z
  A Z
  A X
  B X
  A X
  A Z
  C Y
  A Z
  B X
  C Y
  A X
  C Z
  A Z
  B Z
  A X
  A Z
  A Z
  C Z
  A X
  C Z
  A X
  C X
  A Y
  A X
  A Z
  C X
  A X
  A X
  A X
  A X
  A Z
  A X
  B Z
  C Z
  C Y
  B Z
  B Z
  B X
  A Z
  A X
  B Z
  A Z
  A X
  C Z
  A Z
  C Y
  B Z
  C Y
  A X
  C X
  A X
  A Z
  C Y
  A Z
  A X
  A Y
  C Y
  C Y
  A Z
  A Z
  C Y
  A Z
  A Z
  A X
  C Y
  B Y
  A X
  A X
  A X
  C Y
  B X
  A Z
  A Y
  A Z
  A Z
  A X
  C Z
  A Z
  A Z
  C X
  A Z
  B Z
  B X
  A X
  C Z
  A X
  C Y
  A Z
  C Z
  C Y
  C X
  C Y
  A Z
  A X
  A Z
  A Z
  A Z
  B Z
  A Z
  C Z
  A Z
  C Z
  B Z
  C Z
  C Z
  A Z
  A Z
  B X
  A Z
  A X
  A Z
  A X
  A Y
  A Z
  B Z
  C X
  A Z
  A Z
  B X
  A X
  C X
  C Z
  A X
  A Z
  A X
  C Y
  C Z
  A Z
  C Y
  A X
  A Z
  A Z
  B Z
  C Y
  A Z
  A Z
  C Z
  A X
  C X
  A Z
  A Z
  A Y
  C Z
  C Z
  A Z
  A X
  B Z
  A X
  A X
  A X
  A X
  A Z
  A Z
  A X
  A X
  C Z
  C Y
  C Y
  C Y
  A Z
  C X
  B Z
  C Y
  C Z
  A X
  A X
  A Z
  C Z
  C Z
  A Y
  C Y
  B X
  C Y
  A X
  A X
  A Y
  A X
  A Z
  A Z
  A X
  A Z
  A Z
  A Z
  A X
  A Z
  B Z
  A X
  A X
  A X
  C Z
  C X
  A Z
  C Y
  C Z
  A X
  A Z
  A Z
  A X
  A Z
  A X
  B Z
  A Z
  A Z
  A Z
  C Y
  C Z
  B Z
  A Z
  B Z
  A X
  A X
  A X
  C Y
  A Z
  A Z
  A Z
  C X
  A X
  A X
  A Z
  A Z
  A Z
  A Z
  B Z
  A X
  A Z
  A X
  C Z
  A Z
  A Z
  A Z
  B Z
  A Y
  A Z
  C Z
  B Z
  C Y
  A Z
  A X
  C Y
  A X
  A X
  A Z
  A Z
  A X
  B Z
  B X
  C Z
  C Z
  A Y
  A Z
  A X
  A Z
  A Z
  A Z
  A Z
  A Z
  B Z
  A Z
  B X
  A Z
  A Z
  C Z
  B Z
  A Z
  C X
  B Z
  C X
  B Z
  A Z
  A Z
  A Z
  A Z
  A X
  B Z
  A X
  B Z
  C Y
  A Z
  A Z
  C X
  A X
  A Z
  A Y
  A Z
  C Y
  C X
  C Z
  A X
  A Z
  C Z
  A Z
  A X
  A Z
  B Z
  A X
  A Z
  B Z
  C Y
  A Z
  C Y
  A Z
  C Y
  B X
  C Y
  A Z
  B Z
  A X
  B Z
  B Z
  C X
  A Z
  C Z
  A Z
  C Z
  A Z
  C Z
  B Z
  C Y
  C Z
  A Z
  C Y
  A Z
  C X
  B Y
  B Y
  C X
  C Y
  A Z
  C Z
  A Z
  C X
  A Z
  A Z
  C Y
  A Z
  A Z
  C X
  A Y
  A X
  A X
  B Z
  A Z
  C Z
  A Z
  B Z
  C Y
  C Z
  A Z
  C Y
  B X
  C Z
  A X
  C X
  C Y
  C Y
  C Y
  A Z
  A Z
  B Y
  C Y
  A Z
  A X
  A Z
  A X
  A Z
  C X
  C Z
  A X
  C Z
  B X
  A X
  C Z
  A Z
  C X
  A Y
  A Z
  A X
  A Z
  C Z
  B Z
  B Z
  A Z
  C Y
  A Z
  C Z
  C Y
  C Z
  A Z
  A Z
  B X
  C X
  C Z
  A X
  A Z
  A Y
  C Y
  A X
  A Z
  C Y
  A Z
  B X
  A Z
  A Z
  A Z
  A Z
  C X
  A X
  A Z
  A Y
  A X
  B Y
  A X
  A X
  A X
  A X
  B Z
  A X
  C Y
  C X
  A X
  A Z
  A X
  A Z
  A Z
  A Z
  A Z
  A X
  A Z
  C X
  C Z
  C Z
  A X
  B Y
  A X
  C Y
  A X
  C Z
  A X
  A Z
  A Z
  A Z
  A Z
  C X
  A X
  C Y
  A Z
  A Z
  C Y
  A Z
  A X
  A Z
  A X
  A Z
  B Y
  C Y
  B Y
  C Y
  A Y
  A Z
  C X
  B X
  A X
  A Y
  C Z
  A X
  B Z
  A X
  A X
  A Y
  A X
  A Z
  A Z
  C Z
  C X
  A Z
  C Y
  A Z
  A Z
  C X
  A Y
  A Z
  A X
  A Z
  A Z
  C X
  A Z
  A Z
  A Z
  C Y
  A X
  A X
  A X
  C Z
  A Z
  C Y
  A X
  A X
  C Y
  C X
  C Y
  A Y
  C X
  A Z
  A Z
  A Y
  C X
  A Z
  A Z
  A Z
  C Y
  C X
  A Z
  B Z
  A Z
  A X
  C Y
  A X
  C Y
  C Y
  A X
  C Y
  A X
  C Y
  B Z
  A Z
  A X
  A Z
  A X
  A X
  A Z
  A X
  A X
  C Z
  A Z
  B Y
  C X
  B X
  B X
  A Z
  A Y
  B Y
  A Z
  A X
  A X
  C Y
  C X
  B Z
  A Z
  C Y
  C X
  C Y
  A Y
  A Z
  C X
  A X
  A X
  A Z
  A Z
  B Z
  C X
  A Z
  B Z
  A X
  B Y
  C X
  A X
  A Y
  C X
  A X
  C Y
  A Z
  A Z
  A X
  A X
  C Z
  C Z
  B Z
  A X
  B Z
  B Y
  A Z
  A Z
  C Y
  A Z
  B Y
  A Z
  A X
  C Z
  C Z
  A X
  A X
  A X
  A Z
  A Z
  C Y
  A X
  A X
  A Z
  A X
  C X
  A Z
  A X
  B Z
  B X
  A X
  A X
  A Z
  B Z
  A X
  A Z
  C Y
  C Y
  B Z
  C Z
  A X
  B X
  B X
  A Z
  A X
  A Z
  C Y
  A X
  A X
  B Y
  C Y
  A X
  A X
  C Y
  A Z
  A Z
  C Z
  A Z
  B Z
  A Y
  A Z
  C Y
  B Y
  A X
  C X
  A X
  C Z
  A Z
  A X
  A Z
  A Z
  A X
  B Z
  C Z
  A Z
  A X
  C X
  A X
  C Y
  B Z
  B X
  C Z
  C X
  A X
  A X
  A Z
  A X
  C Y
  B Z
  A Z
  C Z
  A Z
  A Z
  A X
  B X
  A X
  A Z
  A X
  A X
  A Z
  A Z
  A Y
  A Z
  C Z
  B Z
  A X
  A X
  A X
  A Z
  B Z
  A Z
  A Z
  C Z
  C Y
  C Y
  A Z
  A X
  A Z
  C Z
  A X
  A X
  A Z
  A Z
  C X
  B Y
  A X
  B Z
  B Z
  A Z
  A Z
  C Z
  C Z
  A X
  A X
  A Z
  C Z
  A Z
  C Z
  B X
  A X
  A Z
  A Z
  C Z
  A X
  A Z
  B Y
  B X
  A X
  C Y
  C X
  C Y
  B X
  A X
  C Y
  A Z
  B Y
  A Y
  A X
  C Y
  A Z
  A Z
  A Z
  A Z
  A Z
  C Z
  A Z
  A Z
  A Z
  C X
  B X
  C Z
  A X
  B X
  A X
  C Y
  A X
  C X
  A X
  A Z
  A Z
  B X
  A X
  A Z
  A X
  C Z
  A Z
  A Z
  A X
  C Z
  A Z
  C X
  A Z
  A Z
  A Z
  A Z
  B Z
  A X
  A X
  C Y
  A Z
  A Z
  B Z
  A X
  A Z
  A Y
  A Z
  C X
  B Z
  A Z
  A X
  B Y
  A Z
  A X
  C X
  C X
  A X
  A Z
  A X
  A Z
  B Z
  B Y
  A Y
  A Z
  C Y
  B Z
  A Z
  C X
  C Y
  C Z
  C X
  A X
  A Z
  A X
  A X
  A Z
  A X
  A X
  A X
  A Z
  C Z
  C Y
  A Z
  A X
  C X
  B Z
  C Z
  C Y
  C Y
  A Z
  A X
  A Z
  A Z
  A Z
  A X
  A Z
  A Z
  A X
  C Z
  A X
  A X
  A Z
  C X
  B Y
  A X
  C Z
  A X
  C X
  A Z
  A X
  A Y
  C Z
  A X
  A Z
  C X
  B X
  A Z
  A Z
  A X
  A X
  A Z
  C Y
  C Z
  A X
  A Z
  C Z
  C X
  A X
  A Z
  A X
  A X
  B X
  C Z
  B Z
  A Z
  A X
  A X
  B Y
  A Z
  A X
  A X
  A Z
  A Z
  A Z
  A X
  C Y
  A Z
  C Y
  A Z
  A Z
  A X
  C Z
  A Z
  B X
  A X
  C Z
  A X
  A Y
  B X
  C X
  A X
  A X
  A Z
  A X
  A X
  A X
  C Y
  A Y
  A Z
  B Z
  B Z
  B Z
  A Z
  A Z
  A Z
  A X
  B X
  C Y
  A X
  A Z
  C Z
  B Y
  A X
  A Z
  A Z
  A X
  A X
  B Z
  A X
  C Y
  A Z
  A X
  A X
  A Z
  A Z
  A Z
  A Z
  A Z
  A X
  A Z
  A X
  A X
  C Z
  A X
  C Z
  A Z
  C Y
  A X
  A Z
  C Z
  A Z
  A Z
  A X
  A X
  A Z
  A X
  A Z
  B Z
  A X
  A X
  C X
  A Z
  A X
  A Z
  C Y
  C Y
  C Y
  C Y
  C Z
  A Z
  B X
  C Z
  A X
  A Z
  C Y
  A X
  A Z
  B X
  A Z
  C X
  C Z
  C X
  C X
  A Z
  A Z
  B X
  A Z
  A Z
  A Z
  B Z
  A Z
  C Z
  A X
  A X
  A Z
  A X
  A Z
  C Z
  C Z
  A Z
  C Z
  C X
  A Z
  A X
  B Z
  A X
  B Y
  C X
  A X
  A Y
  A Z
  A Z
  A X
  A X
  A Z
  A X
  A Z
  A X
  A Z
  A X
  A Y
  A X
  C Z
  A Z
  A Z
  A X
  A X
  A Z
  A X
  C Y
  C Z
  A Z
  A Y
  A Z
  A X
  A Z
  C X
  B X
  A Z
  C Z
  B Y
  A Z
  A Z
  C Y
  A X
  A Z
  A Z
  C Z
  C Y
  A Z
  B Y
  A X
  C Y
  A X
  A X
  A Z
  C Z
  A Z
  A Z
  A X
  C Z
  A X
  C Y
  C Y
  A X
  B X
  C X
  A Y
  A X
  A Z
  B X
  A X
  B Z
  A Z
  A X
  C X
  A X
  B X
  A X
  A Z
  A X
  C Y
  A Z
  C Z
  C Y
  A X
  B X
  C Y
  C X
  A X
  A Z
  A X
  A Z
  A X
  A X
  A Z
  A Z
  A X
  A Z
  A Y
  A X
  A X
  A Y
  A Z
  A Z
  C Z
  A X
  A Z
  A X
  A X
  B X
  A X
  B Y
  C Y
  A Z
  B Z
  A Z
  B Y
  A Z
  C Y
  A Z
  A X
  A X
  A Z
  C X
  C Z
  B X
  A X
  A Z
  A X
  A Z
  A Z
  B X
  A Z
  A X
  C Z
  B Y
  C Y
  C X
  A X
  A Z
  A X
  C Y
  A Z
  C Z
  A X
  A X
  A X
  A Z
  A Z
  A Z
  B X
  C X
  A Y
  B Z
  A X
  A Z
  A Z
  C X
  C Y
  A X
  A Z
  C Y
  A X
  A Z
  A X
  A Z
  A X
  A X
  B Z
  A X
  C X
  A X
  A X
  A X
  A Z
  A Z
  A X
  A Z
  C Y
  C Z
  B Z
  B X
  A Z
  A X
  C X
  C Y
  A X
  B Z
  B Z
  A Z
  B Z
  C Y
  A X
  A X
  A X
  C Y
  A Z
  A X
  A Z
  A Z
  A Z
  A X
  A Z
  A X
  A Z
  C Y
  A X
  C X
  C Y
  C Y
  C X
  A X
  C Y
  A Z
  C Y
  B Z
  B Z
  C Z
  A X
  B X
  C X
  A Z
  A Y
  A Z
  B Z
  A Z
  B Z
  A X
  A X
  A Z
  A Z
  A Y
  A Z
  A X
  A Y
  A Z
  A Z
  A Z
  A Z
  B X
  A Z
  A Z
  A Z
  A Z
  C Y
  B Y
  C X
  A Z
  B Z
  B X
  A X
  C Z
  A Z
  C Z
  A Z
  A X
  A X
  A X
  A X
  A X
  A Z
  C Y
  A X
  C X
  A Y
  C X
  C X
  A X
  A Z
  A X
  C Z
  A X
  C Y
  B Z
  C Y
  C Z
  B X
  A Z
  C Y
  A Z
  C Y
  A X
  A X
  A X
  A Z
  A Z
  A Z
  A Z
  C Z
  C Y
  A X
  C Y
  B Y
  A X
  A X
  A Z
  C Y
  C Z
  A X
  A X
  A Z
  A Z
  A X
  A X
  A Z`;
}