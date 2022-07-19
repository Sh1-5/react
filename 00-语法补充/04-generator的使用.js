// 生成器函数
function* foo() {
  console.log(0)
  yield 'Hello'
  console.log(1)
  yield 'World'
  console.log(2)
}

// iterator
const res = foo()
console.log(res)

// 使用迭代器
// 调用一次next，就会消耗一次迭代器
const res1 = res.next()
console.log(res1)

const res2 = res.next()
console.log(res2)

const res3 = res.next()
console.log(res3)

// 定义一个生成器函数，依次可以生成1-10的数字
function* generateNumber() {
  for (var i = 1; i <= 10; i++) {
    yield i
  }
}

const num1 = generateNumber()
console.log(num1.next().value)

// generator可以和Promise配合使用
function* bar() {
  const res = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('res')
    }, 3000)
  })
  console.log(res)
}

const it = bar()
it.next().value.then((res) => {
  it.next(res)
})
