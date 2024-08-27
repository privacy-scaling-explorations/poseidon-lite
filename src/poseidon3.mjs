import poseidon from './poseidon'
import unstringifyBigInts from './poseidon/unstringify'
import _c from './constants/3'

const c = unstringifyBigInts(_c)

export function poseidon3(inputs, nOuts) {
  return poseidon(inputs, c, nOuts)
}
