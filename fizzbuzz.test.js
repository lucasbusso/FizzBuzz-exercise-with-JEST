const { fizzbuzz, print } = require('./fizzbuzz')

describe('Fizzbuzz tests', () => {
  test('Test must throw an error if the argument is not a number', () => {
    const expected = 'Error: the argument must be a number'
    const result = fizzbuzz("1")
    expect(expected).toBe(result)
  })

  test('Should print 1 if receive 1', () => {
    const expected = 1
    const result = fizzbuzz(1)
    expect(expected).toBe(result)
  })

  test('Should print fizz if receive a multiple of 3', () => {
    const expected = "fizz"
    const result = fizzbuzz(3)
    expect(expected).toBe(result)
  })

  test('Should print buzz if receive a multiple of 5', () => {
    const expected = "buzz"
    const result = fizzbuzz(10)
    expect(expected).toBe(result)
  })

  test('Should print fizzbuzz if receive a multiple of 5 or 3', () => {
    const expected = "fizzbuzz"
    const result = fizzbuzz(15)
    expect(expected).toBe(result)
  })
})