import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import reverse from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => join(__dirname, '..', '__fixtures__', filename)

test('reverse should correctly reverse a long text', () => {
  const input = fs.readFileSync(getFixturePath('data.txt'), 'utf-8')
  const expected = fs.readFileSync(getFixturePath('result.txt'), 'utf-8')

  expect(reverse(input)).toBe(expected)
})