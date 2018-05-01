export type Patch = () => boolean;
import { creep } from './Creep';
const patchers: Patch[] = [creep];

export function patch() {
  patchers.forEach(p => p());
}
