function createBowl() {
  const uuid = Math.random().toString();
  const type = Math.floor(Math.random() * 5)
  return {
    uuid,
    type,
    isActive: false,
    needDestroy: false,
  }
}

module.exports = createBowl;