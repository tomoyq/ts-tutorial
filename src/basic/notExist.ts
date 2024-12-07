export default function notExistSample() {
  const name = null
  console.log(typeof name, name)

  if (!name) {
    console.log('吾輩は猫である。名前はまだ' + name)
  } else {
    console.log('吾輩は猫である。名前は' + name)
  }

  let age = undefined
  console.log(typeof age, age)

  age = 1
  if (!age) {
    console.log('年齢は秘密です')
  } else {
    console.log('年齢は' + age + 'です')
  }
}
