import data from '../data/1'

console.log(
  data
    .split(/\n\n/)
    .map((items) =>
      items.split(/\n/).reduce((cur, acc) => parseInt(acc) + cur, 0)
    )
    .sort()
    .pop()
)
