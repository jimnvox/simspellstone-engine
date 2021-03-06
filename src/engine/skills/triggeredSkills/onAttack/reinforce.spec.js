import { theCombatSkill } from '../../skillTestCommon/skillTestBase.spec';
import { reinforce } from './../../skills';

describe('reinforce', () => {
  let theReinforceSkill = theCombatSkill(reinforce);

  describe('effects', () => {
    theReinforceSkill.givenTheAttacker
      .shouldAffectTheStatus('protection').stackingWithCurrentValue()
      .and.shouldAffectNoOtherStatuses();

    theReinforceSkill.shouldNotAffectTheDefender();
  });
});
