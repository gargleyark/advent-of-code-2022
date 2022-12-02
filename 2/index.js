import data from '../data/2'

const values = {
  'A X': 4,
  'A Y': 8,
  'A Z': 3,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 7,
  'C Y': 2,
  'C Z': 6,
}

console.log(data.match(/\w\s\w/g).reduce((acc, curr) => values[curr] + acc, 0))
