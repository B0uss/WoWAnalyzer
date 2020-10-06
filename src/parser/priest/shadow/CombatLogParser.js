import MainCombatLogParser from 'parser/core/CombatLogParser';
// core
import Haste from './modules/core/Haste';
import AbilityTracker from './modules/core/AbilityTracker';
import Insanity from './modules/core/Insanity';
import Channeling from './modules/core/Channeling';
import GlobalCooldown from './modules/core/GlobalCooldown';
// features
import Abilities from './modules/Abilities';
import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
import Checklist from './modules/checklist/Module';
import SkippableCasts from './modules/features/SkippableCasts';
// spells:
import Mindbender from './modules/spells/Mindbender';
import Shadowfiend from './modules/spells/Shadowfiend';
import VampiricTouch from './modules/spells/VampiricTouch';
import ShadowWordPain from './modules/spells/ShadowWordPain';
import Voidform from './modules/spells/Voidform';
import VoidformAverageStacks from './modules/spells/VoidformAverageStacks';
import Dispersion from './modules/spells/Dispersion';
import CallToTheVoid from './modules/spells/CallToTheVoid';
import VampiricEmbrace from './modules/spells/VampiricEmbrace';
// azerite
import ChorusOfInsanity from './modules/spells/azeritetraits/ChorusOfInsanity';
import DeathThroes from './modules/spells/azeritetraits/DeathThroes';
import WhispersOfTheDamned from './modules/spells/azeritetraits/WhispersOfTheDamned';
import SpitefulApparitions from './modules/spells/azeritetraits/SpitefulApparitions';
// talents
import TwistOfFate from './modules/talents/TwistOfFate';
import VoidTorrent from './modules/talents/VoidTorrent';
import ShadowCrash from './modules/talents/ShadowCrash';
import AuspiciousSpirits from './modules/talents/AuspiciousSpirits';
import DarkVoid from './modules/talents/DarkVoid';
// normalizers
import ShadowfiendNormalizer from '../shared/normalizers/ShadowfiendNormalizer';

class CombatLogParser extends MainCombatLogParser {
  static specModules = {
    // core
    haste: Haste,
    abilityTracker: AbilityTracker,
    insanity: Insanity,
    channeling: Channeling,
    globalCooldown: GlobalCooldown,

    // features:
    abilities: Abilities,
    alwaysBeCasting: AlwaysBeCasting,
    checklist: Checklist,
    skippableCasts: SkippableCasts,

    // spells:
    mindbender: Mindbender,
    shadowfiend: Shadowfiend,
    vampiricTouch: VampiricTouch,
    shadowWordPain: ShadowWordPain,
    voidform: Voidform,
    voidformAverageStacks: VoidformAverageStacks,
    dispersion: Dispersion,
    callToTheVoid: CallToTheVoid,
    vampiricEmbrace: VampiricEmbrace,

    // azerite
    chorusOfInsanity: ChorusOfInsanity,
    deathThroes: DeathThroes,
    whispersOfTheDamned: WhispersOfTheDamned,
    spitefulApparitions: SpitefulApparitions,

    // talents:
    twistOfFate: TwistOfFate,
    voidTorrent: VoidTorrent,
    shadowCrash: ShadowCrash,
    auspiciousSpirits: AuspiciousSpirits,
    darkVoid: DarkVoid,

    shadowfiendNormalizer: ShadowfiendNormalizer,
  };
}

export default CombatLogParser;