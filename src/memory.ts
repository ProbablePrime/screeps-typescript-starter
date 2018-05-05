export function cleanUp() {
  clearDead();
}

// Automatically delete memory of missing creeps
export function clearDead() {
  Object.keys(Memory.creeps).forEach(name => {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  });
}
