import { fromEnv } from './fromEnv.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('fromEnv()', () => {
	void it('should return environment variables if defined', () => {
		const env = { FOO: 'bar' }
		assert.deepEqual(fromEnv({ foo: 'FOO' })(env), { foo: 'bar' })
	})
	void it('should throw an error if the environment variable is not defined', () => {
		const env = {}
		assert.throws(
			() => fromEnv({ foo: 'FOO' })(env),
			/FOO is not defined in environment!/,
		)
	})
})
