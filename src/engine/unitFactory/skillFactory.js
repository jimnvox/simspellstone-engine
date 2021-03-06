import { skills as skillDatabase } from './../../data/gameData';

export function createSkills(cardSkills) {
  let allSkills = {
    skills: {
      upkeep: [],
      turnStart: [],
      activation: [],
      earlyActivation: [],
      onAttack: [],
      onDamaged: [],
      turnEnd: [],
      onDeath: []
    },
    passives: {}
  };

  cardSkills.map((skill) => {
    var skillInfo = skillDatabase[skill.id];
    return skillAppliers[skillInfo.type](skill);
  }).forEach((skillApplier) => {
    skillApplier(allSkills);
  });

  return allSkills;
}

const skillAppliers = {
  upkeep: createTriggeredSkillApplier('upkeep'),
  turnStart: createTriggeredSkillApplier('turnStart'),
  activation: createActivationSkillApplier('activation'),
  earlyActivation: createActivationSkillApplier('earlyActivation'),
  onDeath: createActivationSkillApplier('onDeath'),
  onAttack: createTriggeredSkillApplier('onAttack'),
  onDamaged: createTriggeredSkillApplier('onDamaged'),
  turnEnd: createTriggeredSkillApplier('turnEnd'),
  passive: function addPassiveSkill(skill) {
    return function (allSkills) {
      allSkills.passives[skill.id] = skill.x;
    };
  }
};

// TODO: Turn these into chain of functions

function createActivationSkillApplier(skillSlot) {
  return function activationSkillApplier(skill) {
    return function applyActivationSkill(allSkills) {
      // TODO: Check skill info for which fields are applicable
      allSkills.skills[skillSlot].push({
        id: skill.id,
        value: skill.x,
        faction: (skill.y || 0),
        timer: (skill.c || 0),
        all: !!skill.y,
        skill: skill.s,
        enhanced: false // TODO: Should this be renamed? It's the skill for enhance/imbue
      });
    };
  };
}

function createTriggeredSkillApplier(skillSlot) {
  return function TriggeredSkillApplier(skill) {
    return function applyTriggeredSkill(allSkills) {
      // TODO: Check skill info for which fields are applicable
      allSkills.skills[skillSlot].push({
        id: skill.id,
        value: skill.x,
        enhanced: false
      });
    };
  };
}
