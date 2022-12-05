import data from '../data/3'

const bags = data.split(/\n/).filter((item) => !!item)

const getDuplicate = (items) =>
  items.slice(0, Math.ceil(items.length / 2)).match(
    new RegExp(
      items
        .slice(Math.ceil(items.length / 2))
        .split('')
        .join('|')
    )
  )[0]

const getValue = (char) => {
  if (char.toLowerCase() === char) {
    return char.charCodeAt(0) - 96
  }
  return char.charCodeAt(0) - 64 + 26
}

const duplicates = bags.map(getDuplicate)
const values = duplicates.map(getValue)

console.log(values.reduce((prev, curr) => prev + curr, 0))
