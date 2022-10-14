import Analyzer, { Options } from 'parser/core/Analyzer';
import { TALENTS_DEMON_HUNTER } from 'common/TALENTS';
import SPELLS from 'common/SPELLS/demonhunter';
import { NumberThreshold, ThresholdStyle, When } from 'parser/core/ParseResults';
import { SpellLink } from 'interface';
import { t } from '@lingui/macro';
import { formatDuration, formatPercentage } from 'common/format';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';
import STATISTIC_CATEGORY from 'parser/ui/STATISTIC_CATEGORY';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import UptimeIcon from 'interface/icons/Uptime';

export default class PainbringerBuff extends Analyzer {
  constructor(options: Options) {
    super(options);

    this.active = this.selectedCombatant.hasTalent(TALENTS_DEMON_HUNTER.PAINBRINGER_TALENT.id);
  }

  get uptime() {
    return (
      this.selectedCombatant.getBuffUptime(SPELLS.PAINBRINGER_BUFF.id) / this.owner.fightDuration
    );
  }

  get uptimeSuggestionThresholds(): NumberThreshold {
    return {
      actual: this.uptime,
      isLessThan: {
        minor: 0.8,
        average: 0.75,
        major: 0.7,
      },
      style: ThresholdStyle.PERCENTAGE,
    };
  }

  suggestions(when: When) {
    when(this.uptimeSuggestionThresholds).addSuggestion((suggest, actual, recommended) =>
      suggest(
        <>
          Your <SpellLink id={SPELLS.PAINBRINGER_BUFF.id} /> uptime can be improved. This is easy to
          maintain and an important source of damage reduction.
        </>,
      )
        .icon(SPELLS.PAINBRINGER_BUFF.icon)
        .actual(
          t({
            id: 'demonhunter.vengeance.painbringerBuff.uptime',
            message: `${formatPercentage(actual)}% Painbringer uptime`,
          }),
        )
        .recommended(`>${formatPercentage(recommended)}% is recommended`),
    );
  }

  statistic() {
    return (
      <Statistic
        position={STATISTIC_ORDER.CORE(5)}
        category={STATISTIC_CATEGORY.TALENTS}
        size="flexible"
        tooltip={<>Total uptime was {formatDuration(this.uptime)}.</>}
      >
        <BoringSpellValueText spellId={SPELLS.PAINBRINGER_BUFF.id}>
          <UptimeIcon /> {formatPercentage(this.uptime)}% <small>uptime</small>
        </BoringSpellValueText>
      </Statistic>
    );
  }
}