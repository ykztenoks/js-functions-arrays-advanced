function message(text) {
  const result = text()
  return result
}

console.log(message(() => "hello user"))

//set timeout
// setTimeout(_ , _)
// setTimeout(() => {} , 1000)

setTimeout(() => {
  console.log("Hey guys Im late")
}, 2000)

setTimeout(() => {
  console.log("Hey im even more late")
}, 4000)

const nums = [1, 2, 3, 4, 5]

// .forEach(() => {})
//map syntax
// const numsDoubled = nums.map(() => {})

const numsDoubled = nums.map((num, index) => {
  console.log(index)
  return num * 2
})

console.log(numsDoubled)
console.log("original nums", nums)

const userObjs = [
  { name: "silviu", email: "silviu@email.com" },
  { name: "juliana", email: "juliana@email.com" },
  { name: "michele", email: "michele@email.com" },
  { name: "daniel", email: "daniel@email.com" },
  { name: "jorge", email: "" },
]

const names = userObjs.map((user) => user.name)
console.log(names)

const even = nums.filter((num) => {
  return num % 2 === 0
})

const odd = nums.filter((num) => {
  return num % 2 === 1
})

console.log("even numbers > ", even)
console.log("odd numbers > ", odd)

const usersWithEmail = userObjs.filter((user) => {
  if (user.email) {
    return user
  }
})
console.log(usersWithEmail)

// same as above
// const validEmailUsers = userObjs.filter((user) => user.email && user)
// const validEmailUsers = userObjs.filter((user) => (user.email ? user : null))

console.log(nums.filter((num) => typeof num !== "number"))

const total = nums.reduce((result, num) => {
  return result + num
}, 0)

console.log("TOTAL", total)

const strings = ["hi", "my", "name", "is", "daniel"]

const phrase = strings.reduce((result, str) => {
  return !result ? result + str : result + " " + str
}, "")

console.log("HERES MY PHRASE", phrase)

const randomNumArr = [2, 3, 77, 9, 0, 100, 14]

console.log(
  randomNumArr.sort((nextValue, currentValue) => {
    return nextValue - currentValue
  }),
) // asceding order

randomNumArr.sort((a, b) => a - b) // ascending sort
console.log(
  "SORT DESC",
  randomNumArr.sort((a, b) => b - a),
) // ascending sort

const sortedAlphabetically = userObjs.sort((a, b) =>
  a.name.localeCompare(b.name),
)

console.log(sortedAlphabetically)

console.log("NUMS REVERSED", nums.reverse())
