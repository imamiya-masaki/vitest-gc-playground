// sum.test.js
import { expect, test } from 'vitest'

test('gc', () => {
  const dom = {"hogehoge": "fugafuga"}
  global.dom = dom;
  const ref = new WeakRef(global.dom)
  global.dom = undefined;
  expect(ref.deref()).toBe(undefined)
})