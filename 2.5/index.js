import data from '../data/2'

const values = {
  'A X': 3,
  'A Y': 4,
  'A Z': 8,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 2,
  'C Y': 6,
  'C Z': 7,
}

console.log(data.match(/\w\s\w/g).reduce((acc, curr) => values[curr] + acc, 0))
