async function generate (options) {
  throw new ReferenceError('Function not implemented')
}

async function clear () {
  throw new ReferenceError('Function not implemented')
}

async function store () {
  throw new ReferenceError('Function not implemented')
}

async function listKeys () {
  throw new ReferenceError('Function not implemented')
}

async function importPublicKey (key) {
  throw new ReferenceError('Function not implemented')
}

async function importPrivateKey (key) {
  throw new ReferenceError('Function not implemented')
}

async function getPublicKey (fpr) {
  throw new ReferenceError('Function not implemented')
}

async function getPrivateKey (fpr) {
  throw new ReferenceError('Function not implemented')
}

async function isLocked (fpr) {
  throw new ReferenceError('Function not implemented')
}

async function unlockKey (fpr, pass) {
  throw new ReferenceError('Function not implemented')
}

async function lockKey (fpr, pass) {
  throw new ReferenceError('Function not implemented')
}

async function sign (message, fpr) {
  throw new ReferenceError('Function not implemented')
}

async function verify (message, signature, signers) {
  throw new ReferenceError('Function not implemented')
}

async function decrypt (message, fpr) {
  throw new ReferenceError('Function not implemented')
}

async function encrypt (message, fpr) {
  throw new ReferenceError('Function not implemented')
}

module.exports = {
  generate: generate,
  clear: clear,
  store: store,
  listKeys: listKeys,
  importPublicKey: importPublicKey,
  importPrivateKey: importPrivateKey,
  getPublicKey: getPublicKey,
  getPrivateKey: getPrivateKey,
  isLocked: isLocked,
  unlock: unlock,
  lock: lock,
  sign: sign,
  verify: verify,
  decrypt: decrypt,
  encrypt: encrypt
}

