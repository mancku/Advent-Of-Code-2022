import _ from "lodash";

export function solvePuzzle() {

  let puzzle1Solution = '';
  let puzzle2Solution = '';

  const stacks = getStacks();
  const stacksSecondPuzzle = _.cloneDeep(stacks);

  const lines = rearrangementProcedures().split('\n');
  for (let index = 0; index < lines.length; index++) {
    let rearrangement = lines[index].trim().split(" ");
    const move = parseInt(rearrangement[1]);
    const from = parseInt(rearrangement[3]) - 1;
    const to = parseInt(rearrangement[5]) - 1;

    let cratesToMove = stacks[from]
      .splice(stacks[from].length - move)
      .reverse();
    stacks[to].push(...cratesToMove);

    cratesToMove = stacksSecondPuzzle[from].splice(stacksSecondPuzzle[from].length - move);
    stacksSecondPuzzle[to].push(...cratesToMove);
  }

  for (const stack of stacks) {
    puzzle1Solution += _.last(stack);
  }

  for (const stackSecondPuzzle of stacksSecondPuzzle) {
    puzzle2Solution += _.last(stackSecondPuzzle);
  }

  // VCTFTJQCG
  console.log(`Top boxes are ${puzzle1Solution}.`);
  // GCFGLDNJZ
  console.log(`Top boxes uising 'CrateMover 9001' are ${puzzle2Solution}.`);
};


function getStacks() {
  const stacks = [[], [], [], [], [], [], [], [], []];
  const lines = crates().split('\n');
  for (let index = lines.length - 1; index >= 0; index--) {
    const line = lines[index];
    for (let cratePosition = 0; cratePosition < 9; cratePosition++) {
      const init = cratePosition * 4;
      const end = init + 4;
      let text = line.slice(init, end).trim();
      if (text !== "") {
        text = text.replace("[", "").replace("]", "");
        stacks[cratePosition].push(text);
      }
    }
  }
  return stacks;
}

/**
 * @param {string[]} assignment
 * @param {number} assignmentIndex
 */
function getElfAssignment(assignment, assignmentIndex) {
  return assignment[assignmentIndex].split("-").map(x => parseInt(x));
}

// https://stackoverflow.com/a/46747018
function crates() {
  return `    [G] [R]                 [P]    
    [H] [W]     [T] [P]     [H]    
    [F] [T] [P] [B] [D]     [N]    
[L] [T] [M] [Q] [L] [C]     [Z]    
[C] [C] [N] [V] [S] [H]     [V] [G]
[G] [L] [F] [D] [M] [V] [T] [J] [H]
[M] [D] [J] [F] [F] [N] [C] [S] [F]
[Q] [R] [V] [J] [N] [R] [H] [G] [Z]`;
}

function rearrangementProcedures() {
  return `move 5 from 8 to 2
move 2 from 4 to 5
move 3 from 3 to 9
move 4 from 1 to 8
move 5 from 9 to 1
move 3 from 3 to 8
move 2 from 4 to 7
move 6 from 6 to 5
move 5 from 2 to 4
move 2 from 9 to 1
move 1 from 7 to 1
move 4 from 7 to 3
move 5 from 1 to 5
move 3 from 1 to 4
move 8 from 5 to 3
move 7 from 3 to 2
move 10 from 4 to 7
move 1 from 7 to 3
move 1 from 6 to 2
move 3 from 8 to 4
move 4 from 3 to 2
move 1 from 1 to 2
move 4 from 3 to 1
move 2 from 1 to 7
move 3 from 5 to 1
move 7 from 8 to 4
move 9 from 5 to 1
move 9 from 2 to 7
move 6 from 4 to 9
move 14 from 7 to 5
move 2 from 1 to 4
move 6 from 7 to 1
move 4 from 4 to 9
move 6 from 2 to 8
move 2 from 4 to 9
move 2 from 9 to 3
move 3 from 8 to 3
move 5 from 9 to 4
move 1 from 2 to 9
move 5 from 5 to 3
move 3 from 2 to 7
move 1 from 1 to 4
move 3 from 7 to 5
move 4 from 9 to 6
move 2 from 9 to 3
move 5 from 1 to 6
move 7 from 6 to 5
move 1 from 2 to 3
move 10 from 1 to 5
move 1 from 8 to 3
move 14 from 3 to 7
move 1 from 8 to 4
move 2 from 6 to 1
move 28 from 5 to 9
move 1 from 2 to 1
move 5 from 4 to 6
move 2 from 4 to 3
move 13 from 7 to 8
move 1 from 3 to 5
move 1 from 5 to 2
move 1 from 3 to 6
move 1 from 5 to 6
move 22 from 9 to 1
move 1 from 2 to 7
move 3 from 9 to 5
move 2 from 7 to 5
move 18 from 1 to 4
move 7 from 8 to 3
move 4 from 6 to 8
move 2 from 5 to 8
move 5 from 3 to 9
move 2 from 5 to 1
move 3 from 6 to 8
move 1 from 5 to 9
move 2 from 3 to 6
move 10 from 1 to 5
move 15 from 8 to 6
move 10 from 6 to 8
move 1 from 9 to 4
move 1 from 1 to 3
move 4 from 4 to 3
move 5 from 3 to 5
move 9 from 5 to 6
move 13 from 6 to 5
move 8 from 5 to 7
move 8 from 9 to 6
move 2 from 6 to 4
move 2 from 6 to 2
move 3 from 7 to 4
move 2 from 2 to 8
move 1 from 5 to 4
move 3 from 7 to 9
move 1 from 5 to 9
move 5 from 6 to 9
move 10 from 8 to 3
move 3 from 8 to 1
move 5 from 9 to 2
move 1 from 6 to 4
move 4 from 5 to 6
move 7 from 3 to 7
move 5 from 6 to 5
move 19 from 4 to 8
move 15 from 8 to 3
move 2 from 1 to 5
move 7 from 5 to 9
move 2 from 7 to 2
move 3 from 3 to 8
move 5 from 5 to 8
move 10 from 9 to 3
move 1 from 4 to 2
move 10 from 8 to 3
move 29 from 3 to 2
move 2 from 3 to 4
move 1 from 1 to 5
move 2 from 8 to 4
move 1 from 9 to 1
move 1 from 3 to 9
move 1 from 1 to 9
move 2 from 3 to 4
move 33 from 2 to 1
move 2 from 2 to 4
move 1 from 3 to 1
move 22 from 1 to 2
move 6 from 4 to 9
move 4 from 7 to 1
move 16 from 1 to 4
move 3 from 7 to 6
move 2 from 9 to 4
move 1 from 5 to 2
move 9 from 4 to 2
move 1 from 6 to 5
move 7 from 4 to 2
move 6 from 9 to 8
move 4 from 4 to 9
move 4 from 8 to 3
move 2 from 4 to 3
move 2 from 2 to 5
move 2 from 5 to 2
move 1 from 5 to 6
move 3 from 9 to 5
move 1 from 6 to 8
move 2 from 6 to 5
move 1 from 3 to 2
move 1 from 8 to 4
move 2 from 8 to 2
move 5 from 5 to 6
move 44 from 2 to 8
move 1 from 4 to 8
move 3 from 6 to 8
move 2 from 6 to 2
move 37 from 8 to 3
move 1 from 9 to 4
move 1 from 2 to 5
move 5 from 8 to 6
move 1 from 4 to 6
move 1 from 2 to 4
move 16 from 3 to 2
move 1 from 4 to 5
move 1 from 8 to 3
move 4 from 8 to 2
move 1 from 8 to 7
move 2 from 5 to 8
move 15 from 2 to 4
move 5 from 6 to 3
move 1 from 7 to 4
move 1 from 8 to 9
move 1 from 6 to 7
move 1 from 8 to 3
move 2 from 2 to 8
move 1 from 9 to 3
move 2 from 8 to 4
move 1 from 4 to 6
move 33 from 3 to 7
move 1 from 6 to 3
move 1 from 4 to 8
move 1 from 8 to 9
move 4 from 4 to 3
move 9 from 4 to 7
move 3 from 4 to 8
move 11 from 7 to 2
move 14 from 7 to 6
move 1 from 8 to 3
move 1 from 9 to 5
move 1 from 5 to 1
move 8 from 2 to 9
move 1 from 8 to 7
move 6 from 3 to 6
move 18 from 6 to 4
move 1 from 2 to 7
move 1 from 3 to 6
move 14 from 4 to 2
move 4 from 4 to 3
move 3 from 6 to 3
move 19 from 2 to 6
move 16 from 6 to 8
move 1 from 1 to 8
move 16 from 8 to 7
move 3 from 9 to 4
move 3 from 6 to 2
move 3 from 4 to 7
move 4 from 3 to 2
move 2 from 2 to 4
move 4 from 9 to 8
move 5 from 2 to 8
move 29 from 7 to 5
move 6 from 8 to 2
move 2 from 3 to 4
move 2 from 2 to 6
move 1 from 3 to 5
move 4 from 2 to 6
move 8 from 7 to 5
move 1 from 7 to 5
move 2 from 8 to 6
move 1 from 8 to 7
move 6 from 6 to 1
move 2 from 7 to 6
move 1 from 9 to 7
move 3 from 1 to 7
move 3 from 6 to 1
move 1 from 7 to 6
move 3 from 1 to 6
move 1 from 1 to 5
move 4 from 6 to 3
move 2 from 4 to 2
move 38 from 5 to 6
move 3 from 3 to 8
move 4 from 8 to 6
move 22 from 6 to 8
move 1 from 7 to 8
move 2 from 6 to 2
move 2 from 5 to 2
move 2 from 2 to 1
move 2 from 4 to 6
move 2 from 2 to 1
move 1 from 1 to 9
move 2 from 8 to 5
move 2 from 2 to 8
move 2 from 5 to 2
move 2 from 7 to 2
move 1 from 3 to 1
move 4 from 1 to 8
move 1 from 9 to 5
move 1 from 1 to 7
move 1 from 2 to 8
move 29 from 8 to 3
move 15 from 3 to 2
move 12 from 2 to 5
move 1 from 1 to 6
move 3 from 2 to 1
move 6 from 3 to 8
move 2 from 3 to 9
move 1 from 6 to 7
move 12 from 5 to 8
move 2 from 7 to 1
move 2 from 1 to 4
move 2 from 4 to 2
move 1 from 5 to 8
move 1 from 3 to 6
move 2 from 3 to 4
move 3 from 1 to 4
move 5 from 8 to 9
move 4 from 4 to 2
move 5 from 9 to 6
move 26 from 6 to 8
move 7 from 2 to 8
move 3 from 3 to 1
move 1 from 6 to 4
move 14 from 8 to 6
move 2 from 1 to 2
move 1 from 1 to 3
move 18 from 8 to 5
move 15 from 8 to 2
move 5 from 6 to 8
move 4 from 5 to 8
move 7 from 2 to 5
move 2 from 9 to 6
move 1 from 2 to 1
move 7 from 2 to 3
move 7 from 8 to 1
move 2 from 6 to 3
move 1 from 4 to 6
move 2 from 8 to 6
move 10 from 3 to 9
move 18 from 5 to 8
move 1 from 4 to 6
move 2 from 1 to 9
move 12 from 6 to 9
move 1 from 6 to 9
move 9 from 8 to 4
move 6 from 1 to 2
move 3 from 8 to 9
move 14 from 9 to 8
move 5 from 4 to 9
move 2 from 4 to 5
move 16 from 8 to 5
move 12 from 5 to 4
move 7 from 5 to 1
move 1 from 1 to 8
move 1 from 5 to 8
move 1 from 4 to 9
move 8 from 2 to 7
move 12 from 4 to 3
move 2 from 2 to 5
move 1 from 3 to 2
move 3 from 5 to 4
move 1 from 4 to 8
move 3 from 4 to 9
move 18 from 9 to 8
move 8 from 3 to 1
move 5 from 8 to 1
move 1 from 2 to 5
move 3 from 7 to 1
move 3 from 7 to 5
move 1 from 8 to 9
move 5 from 9 to 7
move 2 from 3 to 6
move 16 from 1 to 4
move 14 from 8 to 6
move 2 from 5 to 6
move 4 from 1 to 6
move 3 from 4 to 9
move 15 from 6 to 1
move 5 from 4 to 3
move 2 from 8 to 2
move 6 from 4 to 3
move 15 from 1 to 5
move 14 from 5 to 3
move 5 from 6 to 2
move 2 from 4 to 7
move 1 from 1 to 6
move 2 from 3 to 4
move 3 from 8 to 1
move 1 from 5 to 1
move 5 from 7 to 1
move 7 from 1 to 3
move 3 from 6 to 2
move 4 from 9 to 5
move 2 from 4 to 3
move 4 from 7 to 9
move 8 from 2 to 9
move 1 from 9 to 1
move 2 from 2 to 8
move 11 from 9 to 1
move 6 from 5 to 1
move 21 from 3 to 2
move 1 from 8 to 5
move 5 from 1 to 7
move 12 from 1 to 8
move 1 from 5 to 2
move 5 from 3 to 2
move 4 from 7 to 2
move 1 from 7 to 8
move 13 from 2 to 5
move 13 from 2 to 5
move 2 from 2 to 1
move 1 from 1 to 9
move 26 from 5 to 4
move 3 from 2 to 7
move 2 from 3 to 9
move 1 from 1 to 6
move 5 from 3 to 2
move 2 from 9 to 6
move 1 from 1 to 8
move 3 from 1 to 6
move 24 from 4 to 9
move 13 from 9 to 1
move 2 from 6 to 2
move 3 from 7 to 5
move 2 from 9 to 7
move 8 from 8 to 3
move 4 from 8 to 5
move 2 from 7 to 2
move 8 from 9 to 4
move 10 from 1 to 2
move 1 from 9 to 1
move 1 from 9 to 2
move 4 from 3 to 2
move 4 from 1 to 8
move 3 from 4 to 8
move 12 from 2 to 3
move 3 from 4 to 6
move 5 from 3 to 2
move 9 from 3 to 9
move 4 from 2 to 9
move 1 from 3 to 7
move 6 from 8 to 2
move 4 from 6 to 8
move 1 from 3 to 8
move 6 from 9 to 1
move 2 from 1 to 8
move 5 from 5 to 8
move 3 from 6 to 8
move 1 from 5 to 1
move 7 from 8 to 2
move 1 from 1 to 4
move 1 from 4 to 6
move 1 from 9 to 4
move 1 from 5 to 9
move 1 from 4 to 7
move 12 from 8 to 2
move 4 from 4 to 3
move 2 from 3 to 1
move 1 from 7 to 2
move 1 from 6 to 8
move 1 from 8 to 6
move 4 from 9 to 3
move 1 from 9 to 3
move 13 from 2 to 3
move 3 from 1 to 7
move 2 from 9 to 4
move 2 from 1 to 9
move 2 from 7 to 2
move 1 from 4 to 1
move 2 from 7 to 5
move 14 from 3 to 8
move 1 from 8 to 5
move 2 from 1 to 4
move 2 from 3 to 4
move 2 from 3 to 4
move 10 from 8 to 3
move 2 from 4 to 8
move 1 from 9 to 3
move 3 from 2 to 3
move 16 from 2 to 4
move 1 from 8 to 5
move 11 from 3 to 4
move 2 from 3 to 7
move 3 from 5 to 1
move 1 from 1 to 2
move 3 from 2 to 5
move 1 from 1 to 9
move 2 from 7 to 4
move 8 from 4 to 3
move 1 from 6 to 7
move 1 from 8 to 6
move 1 from 5 to 1
move 6 from 3 to 5
move 2 from 1 to 3
move 5 from 5 to 7
move 2 from 7 to 2
move 2 from 3 to 4
move 4 from 7 to 1
move 1 from 6 to 8
move 1 from 2 to 1
move 3 from 1 to 6
move 2 from 9 to 6
move 8 from 2 to 1
move 2 from 6 to 2
move 2 from 6 to 3
move 6 from 3 to 5
move 2 from 4 to 6
move 2 from 2 to 9
move 1 from 8 to 6
move 2 from 6 to 5
move 1 from 9 to 1
move 11 from 5 to 8
move 7 from 8 to 6
move 23 from 4 to 1
move 1 from 5 to 9
move 1 from 4 to 6
move 2 from 4 to 8
move 1 from 3 to 1
move 6 from 8 to 3
move 2 from 9 to 6
move 3 from 6 to 1
move 3 from 8 to 7
move 1 from 3 to 6
move 18 from 1 to 2
move 5 from 3 to 8
move 13 from 2 to 9
move 5 from 9 to 7
move 1 from 8 to 6
move 5 from 2 to 6
move 2 from 1 to 7
move 9 from 7 to 8
move 11 from 8 to 6
move 2 from 9 to 4
move 16 from 6 to 1
move 2 from 4 to 6
move 1 from 8 to 9
move 1 from 7 to 6
move 8 from 1 to 5
move 3 from 6 to 5
move 8 from 6 to 4
move 7 from 9 to 5
move 1 from 8 to 1
move 6 from 5 to 1
move 9 from 5 to 7
move 4 from 7 to 9
move 1 from 4 to 8
move 1 from 8 to 3
move 1 from 1 to 8
move 1 from 8 to 7
move 22 from 1 to 3
move 1 from 6 to 7
move 2 from 9 to 4
move 1 from 9 to 6
move 1 from 9 to 4
move 10 from 4 to 3
move 1 from 1 to 2
move 2 from 5 to 4
move 27 from 3 to 8
move 5 from 3 to 9`;
}