import { Memoize } from 'typescript-memoize';

export class Group {
  public creeps: Creep[] = this.getCreeps(this.name);

  constructor(public room: Room, public name: string) {}

  @Memoize()
  public getCreeps(group: string): Creep[] {
    return Object.values(Game.creeps).filter(
      creep => creep.memory[group] === this.name,
    );
  }
}
