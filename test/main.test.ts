import {expect, test} from 'bun:test'

const {default: cueteeClient} = await import('#src/main.ts')
test('should run', () => {
  const result = cueteeClient()
  expect(result).toBe('cuetee-client') // TODO Test actual functionality
})
