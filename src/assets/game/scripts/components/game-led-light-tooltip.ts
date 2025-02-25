import gc from "@sg/game-client-base";
import { _decorator, Color } from "cc";
import { LedLightTooltipAlignment } from "db://shared-components/game/led-light/scripts/components/led-light-tooltip-alignment";
import { BetChoice } from "./commons";

const { ccclass } = _decorator;

//
enum ColorResult {
    head = "#032A98",
    tail = "#C50D0D",
}

@ccclass()
export class GameLedLightToolTip extends LedLightTooltipAlignment {
    public setTooltipInfo(ledLightInfo: gc.RoundHistories.RoundHistory) {
        this.roundId.string = `#${ledLightInfo.roundId}`;
        const winChoice = this.findWinningChoice(ledLightInfo);
        const name = gc.Translator.gameTranslate(`glossary_${winChoice}`);
        this.result.string = name.toUpperCase();
        this.result.color = new Color(ColorResult[winChoice]);
        this.showTooltip();
    }

    protected findWinningChoice(ledLightInfo: gc.RoundHistories.RoundHistory): string {
        const choices = [BetChoice.Trump, BetChoice.Harris];
        return choices.find((choice) => ledLightInfo.settlementResult[choice]) || "";
    }
}
