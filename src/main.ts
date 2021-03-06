//tslint:disable-next-line:import-name
//import Tasks from 'creep-tasks';
import { cleanUp } from './memory';

export const loop = () => {
  // tslint:disable-next-line:no-console
  cleanUp();

  Object.values(Game.rooms).filter(room => {
    if (!room.controller) {
      return false;
    }

    return room.controller.my;
  });
};
