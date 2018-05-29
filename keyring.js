module.exports = {
  get pubkey () {
    throw new ReferenceError('Function not implemented')
  }

  get isLocked () {
    throw new ReferenceError('Function not implemented')
  }

  generate() {
    throw new ReferenceError('Function not implemented')
  }

  async unlock (pass) {
    throw new ReferenceError('Function not implemented')
  }

  async lock () {
    throw new ReferenceError('Function not implemented')
  }

  async sign (message) {
    throw new ReferenceError('Function not implemented')
  }

  async verify (message, signature) {
    throw new ReferenceError('Function not implemented')
  }

  async decrypt (message, keys) {
    throw new ReferenceError('Function not implemented')
  }

  async encrypt (message, keys) {
    throw new ReferenceError('Function not implemented')
  }
}
