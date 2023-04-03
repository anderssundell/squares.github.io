
/// 25 march
const level1 = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 3, 0, 0, 4, 0, 0],
  [0, 0, 0, 2, 3, 0, 0, 0, 0, 0],
  [0, 3, 3, 3, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 3, 3, 3, 0],
  [0, 0, 0, 0, 0, 3, 2, 0, 0, 0],
  [0, 0, 4, 0, 0, 3, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const level2 = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 3, 0],
  [0, 0, 2, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 2, 3, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 2, 3, 0, 3, 0, 0, 0, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 2]
];

const level3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 1, 0, 0, 0, 2],
  [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 9],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const level4 = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
  [0, 0, 3, 3, 3, 3, 3, 3, 0, 0],
  [0, 0, 3, 2, 0, 0, 2, 3, 0, 0],
  [0, 0, 3, 0, 4, 0, 0, 3, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 3, 2, 0, 0, 2, 3, 0, 0],
  [0, 0, 3, 3, 3, 3, 3, 3, 0, 0],
  [0, 4, 0, 0, 0, 0, 0, 0, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const level5 = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 2, 0, 0, 2],
  [0, 0, 0, 3, 0, 0, 3, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 0, 3, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 2, 0, 0, 2],
  [0, 0, 0, 3, 0, 0, 3, 0, 0, 3]
];

const level6 = [
  [0, 1, 0, 0, 0, 9, 0, 0, 9, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 9, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
];

const level7 = [
  [0, 0, 2, 0, 2, 0, 0, 3, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 3, 0],
  [1, 0, 2, 0, 2, 0, 0, 3, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 4, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const level8 = [
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [3, 3, 3, 0, 0, 0, 3, 3, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 3, 3, 0, 0, 0, 3, 3, 0, 3],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 9],
  [3, 3, 3, 0, 0, 0, 3, 3, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 3, 3, 0, 0, 0, 3, 3, 0, 3],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [3, 3, 3, 0, 0, 0, 3, 3, 0, 3]
];

const level9 = [
  [0, 0, 2, 0, 2, 3, 0, 0, 2, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 2, 0],
  [0, 2, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 1, 0, 2, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 3, 0, 2, 0],
  [2, 0, 0, 0, 0, 2, 3, 0, 2, 0]
];

const level10 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
  [0, 0, 4, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 4, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const level11 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 9, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];



const originallevels = [
level1,
level2,
level3,
level4,
level5,
level6,
level7,
level8,
level9,
level10,
level11];

window.originallevels = originallevels;

