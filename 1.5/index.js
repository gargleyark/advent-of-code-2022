import data from '../data/1'

const sortedElves = data
  .split(/\n\n/)
  .map((items) =>
    items.split(/\n/).reduce((cur, acc) => parseInt(acc) + cur, 0)
  )
  .sort((a, b) => b - a)

console.log(sortedElves[0] + sortedElves[1] + sortedElves[2])
