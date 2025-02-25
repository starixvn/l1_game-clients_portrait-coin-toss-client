import gc from "@sg/game-client-base";
import { _decorator, SpriteAtlas, SpriteFrame } from "cc";
import { LedLightItem } from "db://shared-components/game/led-light/scripts/components/led-light-item";
import { LedLightItemModel } from "db://shared-components/game/led-light/scripts/components/led-light-item-model";
import { BetChoice } from "./commons";

const { ccclass, property } = _decorator;

@ccclass("GameLedLightItem")
export class GameLedLightItem extends LedLightItem {
    @property({ override: true, visible: false })
    itemModel: LedLightItemModel[] = [];

    @property(SpriteAtlas)
    spriteAtlas: SpriteAtlas = null;

    protected getSpriteFrameFromSettlement(settlementResult: gc.GameServiceMessage.TSettlementResult): SpriteFrame {
        let spriteFrame: SpriteFrame = null;

        const betChoiceValues = Object.values(BetChoice);
        betChoiceValues.forEach((value) => {
            const frame = this.spriteAtlas.getSpriteFrame(`${value}-led-light`);
            if (settlementResult[value]) {
                spriteFrame = frame;
            }
        });
        return spriteFrame;
    }
}
