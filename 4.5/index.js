import data from '../data/4'

const pairs = data.match(/\d+-\d+,\d+-\d+/g)

const totalContained = pairs.reduce((prev, curr) => {
  const pairArray = curr
    .split(/,/)
    .map((item) => [
      parseInt(item.match(/^\d+/)[0]),
      parseInt(item.match(/\d+$/)[0]),
    ])

  if (
    pairArray[0][0] >= pairArray[1][0] &&
    pairArray[0][0] <= pairArray[1][1]
  ) {
    return prev + 1
  }

  if (
    pairArray[1][0] >= pairArray[0][0] &&
    pairArray[1][0] <= pairArray[0][1]
  ) {
    return prev + 1
  }

  return prev
}, 0)

console.log(totalContained)
