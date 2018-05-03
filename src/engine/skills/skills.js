import Barrage from './barrage';
import Bolt from './bolt';
import Empower from './empower';
import Enlarge from './enlarge';
import Enrage from './enrage';
import Freeze from './freeze';
import FreezeSelf from './freezeSelf';
import Frostbreath from './frostbreath';
import Heal from './heal';
import Hex from './hex';
import Legion from './legion';
import Nullify from './nullify';
import PoisonBolt from './poisonBolt';
import Protect from './protect';
import Scorch from './scorch';
import ScorchSelf from './scorchSelf';
import Scorchbreath from './scorchbreath';
import Weaken from './weaken';
import WeakenSelf from './weakenSelf';
import WingWard from './wingWard';

// maintain legacy skill names
export const barrage = Object.freeze(new Barrage());
export const burn = Object.freeze(new Scorch());
export const burnself = Object.freeze(new ScorchSelf());
export const enfeeble = Object.freeze(new Hex());
export const enlarge = Object.freeze(new Enlarge());
export const enrage = Object.freeze(new Enrage());
export const evadebarrier = Object.freeze(new WingWard());
export const frost = Object.freeze(new Frostbreath());
export const heal = Object.freeze(new Heal());
export const jam = Object.freeze(new Freeze());
export const jamself = Object.freeze(new FreezeSelf());
export const legion = Object.freeze(new Legion());
export const nullify = Object.freeze(new Nullify());
export const poisonstrike = Object.freeze(new PoisonBolt());
export const protect = Object.freeze(new Protect());
export const rally = Object.freeze(new Empower());
export const scorchbreath = Object.freeze(new Scorchbreath());
export const strike = Object.freeze(new Bolt());
export const weaken = Object.freeze(new Weaken());
export const weakenself = Object.freeze(new WeakenSelf());