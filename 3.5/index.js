import data from '../data/3'

const groups = data.match(/\w+\n\w+\n\w+/g)

const getSharedItems = (bagsString) => {
  const bags = bagsString.split(/\n/)
  const sharedItemRegex = new RegExp(bags[0].split('').join('|'), 'g')
  const sharedItems = [
    bags[0].match(sharedItemRegex).join(''),
    bags[1].match(sharedItemRegex).join(''),
    bags[2].match(sharedItemRegex).join(''),
  ].join('=')
  return bags[2].match(sharedItemRegex).filter((item) => {
    const itemRegex = new RegExp(
      `\\w*${item}\\w*=\\w*${item}\\w*=\\w*${item}\\w*`
    )
    if (sharedItems.match(itemRegex)) {
      return true
    }
    return false
  })[0]
}

const getValue = (char) => {
  if (char.toLowerCase() === char) {
    return char.charCodeAt(0) - 96
  }
  return char.charCodeAt(0) - 64 + 26
}

const duplicates = groups.map(getSharedItems)
const values = duplicates.map(getValue)

console.log(values.reduce((prev, curr) => prev + curr, 0))
