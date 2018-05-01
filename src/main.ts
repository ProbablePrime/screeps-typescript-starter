export const loop = () => {
  // tslint:disable-next-line:no-console
  console.log(`Current game tick is ${Game.time}`);

  // Automatically delete memory of missing creeps
  Object.keys(Memory.creeps).forEach(name => {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  });
};
