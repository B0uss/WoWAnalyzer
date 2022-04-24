import SPELLS from 'common/SPELLS';
import Spell from 'common/SPELLS/Spell';

import { castToDamage } from './castDamage';

// Based on SpellData for Hit Combo and Serenity
export const ABILITIES_AFFECTED_BY_DAMAGE_INCREASES = [
  SPELLS.MELEE,
  SPELLS.TIGER_PALM,
  SPELLS.BLACKOUT_KICK,
  SPELLS.FISTS_OF_FURY_CAST,
  SPELLS.FISTS_OF_FURY_DAMAGE,
  SPELLS.RISING_SUN_KICK,
  SPELLS.RISING_SUN_KICK_SECOND,
  SPELLS.SPINNING_CRANE_KICK,
  SPELLS.SPINNING_CRANE_KICK_DAMAGE,
  SPELLS.FLYING_SERPENT_KICK,
  SPELLS.CRACKLING_JADE_LIGHTNING,
  // talents
  SPELLS.CHI_WAVE_TALENT,
  SPELLS.CHI_WAVE_TALENT_DAMAGE,
  SPELLS.FIST_OF_THE_WHITE_TIGER_TALENT,
  SPELLS.WHIRLING_DRAGON_PUNCH_TALENT,
  SPELLS.WHIRLING_DRAGON_PUNCH_TALENT_TICK,
  SPELLS.RUSHING_JADE_WIND,
  SPELLS.CHI_BURST_TALENT,
  SPELLS.CHI_BURST_TALENT_DAMAGE,
  SPELLS.EYE_OF_THE_TIGER_TALENT,
  // covenants
  SPELLS.FAELINE_STOMP_CAST,
  SPELLS.FAELINE_STOMP_PULSE_DAMAGE,
  SPELLS.FAELINE_STOMP_DAMAGE_AND_HEAL,
];

export const ABILITIES_AFFECTED_BY_MASTERY = [
  SPELLS.TIGER_PALM,
  SPELLS.BLACKOUT_KICK,
  SPELLS.FISTS_OF_FURY_CAST,
  SPELLS.RISING_SUN_KICK,
  SPELLS.CHI_WAVE_TALENT,
  SPELLS.FIST_OF_THE_WHITE_TIGER_TALENT,
  SPELLS.SPINNING_CRANE_KICK,
  SPELLS.FLYING_SERPENT_KICK,
  SPELLS.CRACKLING_JADE_LIGHTNING,
  SPELLS.WHIRLING_DRAGON_PUNCH_TALENT,
  SPELLS.TOUCH_OF_DEATH,
  SPELLS.CHI_BURST_TALENT,
  SPELLS.RUSHING_JADE_WIND,
  SPELLS.EXPEL_HARM,
  SPELLS.WEAPONS_OF_ORDER_CAST,
  SPELLS.FALLEN_ORDER_CAST,
  SPELLS.FAELINE_STOMP_CAST,
  SPELLS.BONEDUST_BREW_CAST,
];

export const DAMAGE_AFFECTED_BY_MASTERY = [
  SPELLS.TIGER_PALM,
  SPELLS.BLACKOUT_KICK,
  SPELLS.FISTS_OF_FURY_DAMAGE,
  SPELLS.RISING_SUN_KICK,
  SPELLS.SPINNING_CRANE_KICK_DAMAGE,
  SPELLS.FLYING_SERPENT_KICK_DAMAGE,
  SPELLS.CRACKLING_JADE_LIGHTNING,
  SPELLS.WHIRLING_DRAGON_PUNCH_TALENT,
  SPELLS.WHIRLING_DRAGON_PUNCH_TALENT_TICK,
  SPELLS.CHI_WAVE_TALENT,
  SPELLS.CHI_WAVE_TALENT_DAMAGE,
  SPELLS.CHI_BURST_TALENT,
  SPELLS.CHI_BURST_TALENT_DAMAGE,
  SPELLS.FIST_OF_THE_WHITE_TIGER_TALENT,
  SPELLS.RUSHING_JADE_WIND,
  SPELLS.EXPEL_HARM_DAMAGE,
  SPELLS.FAELINE_STOMP_CAST,
  SPELLS.FAELINE_STOMP_PULSE_DAMAGE,
  SPELLS.FAELINE_STOMP_DAMAGE_AND_HEAL,
];

export const CHI_SPENDERS = [
  SPELLS.BLACKOUT_KICK,
  SPELLS.RISING_SUN_KICK,
  SPELLS.FISTS_OF_FURY_CAST,
  SPELLS.SPINNING_CRANE_KICK,
  SPELLS.RUSHING_JADE_WIND,
];

export const ABILITIES_CLONED_BY_SEF = [
  SPELLS.TIGER_PALM,
  SPELLS.BLACKOUT_KICK,
  SPELLS.FISTS_OF_FURY_CAST,
  SPELLS.FISTS_OF_FURY_DAMAGE,
  SPELLS.RISING_SUN_KICK,
  SPELLS.RISING_SUN_KICK_SECOND,
  SPELLS.CHI_WAVE_TALENT,
  SPELLS.FIST_OF_THE_WHITE_TIGER_TALENT,
  SPELLS.SPINNING_CRANE_KICK,
  SPELLS.SPINNING_CRANE_KICK_DAMAGE,
  SPELLS.CRACKLING_JADE_LIGHTNING,
  SPELLS.WHIRLING_DRAGON_PUNCH_TALENT,
  SPELLS.WHIRLING_DRAGON_PUNCH_TALENT_TICK,
];

/**
 * Abilities that are affected by the T28 4-set bonus
 * "Primordial Power"
 * https://www.wowhead.com/spell=363924/primordial-power
 *
 * https://docs.google.com/spreadsheets/d/1QvAtBtaFKaAuhy9iGiMmEzCd--kuwL3oWIDwny6GEoQ/edit
 */
export const ABILITIES_THAT_CONSUME_PRIMORDIAL_POWER: Spell[] = [
  SPELLS.BLACKOUT_KICK,
  SPELLS.CHI_BURST_TALENT,
  SPELLS.CHI_WAVE_TALENT,
  SPELLS.CRACKLING_JADE_LIGHTNING,
  SPELLS.FAELINE_STOMP_CAST,
  SPELLS.FIST_OF_THE_WHITE_TIGER_TALENT,
  SPELLS.FISTS_OF_FURY_CAST,
  SPELLS.FLYING_SERPENT_KICK,
  SPELLS.RISING_SUN_KICK,
  SPELLS.RUSHING_JADE_WIND,
  SPELLS.SPINNING_CRANE_KICK,
  SPELLS.TIGER_PALM,
  SPELLS.WHIRLING_DRAGON_PUNCH_TALENT,
];

/**
 * Damage that is affected by the T28 4-set bonus
 * "Primordial Power"
 * https://www.wowhead.com/spell=363924/primordial-power
 * Seems to match DAMAGE_AFFECTED_BY_MASTERY but excludes
 * Expel Harm
 */
export const DAMAGE_AFFECTED_BY_PRIMORDIAL_POWER: Spell[] = [
  // Include both all original cast events
  ...ABILITIES_THAT_CONSUME_PRIMORDIAL_POWER,
  // And all known damage spells
  ...ABILITIES_THAT_CONSUME_PRIMORDIAL_POWER.map(
    (ability) => castToDamage[ability.id] || ability,
  ).flat(),
  SPELLS.EYE_OF_THE_TIGER_HEAL,
  SPELLS.JADE_IGNITION_DAMAGE,
];

/**
 * These spells are special cases that benefit from the 4p bonus while the
 * buff is up, regardless if the cast was powered or not
 *
 * https://docs.google.com/spreadsheets/d/1QvAtBtaFKaAuhy9iGiMmEzCd--kuwL3oWIDwny6GEoQ/edit
 */
export const DAMAGE_AFFECTED_BY_PRIMORDIAL_POWER_NAIVELY: Spell[] = [
  ...castToDamage[SPELLS.CHI_BURST_TALENT.id],
  ...castToDamage[SPELLS.CHI_WAVE_TALENT.id],
  SPELLS.EYE_OF_THE_TIGER_HEAL,
  SPELLS.JADE_IGNITION_DAMAGE,
];

console.log({ DAMAGE_AFFECTED_BY_PRIMORDIAL_POWER });

export const BLACKOUT_KICK_COOLDOWN_REDUCTION_MS = 1000;
