import gc from "@sg/game-client-base";
import { _decorator, Layout, Node, UITransform } from "cc";
import Observer from "observer";
import { ObserverComponent } from "../../../../extensions/shared-components/assets/shared/common-components/observer-component/scripts/observer-component";
import { BetChoice } from "./commons";
const { ccclass, property } = _decorator;
const { render } = Observer;
const { Rounds } = gc;
@ccclass()
export default class UserBetPercentage extends ObserverComponent {
    @property(Node)
    headPercentage: Node = null;

    @property(Node)
    tailPercentage: Node = null;

    @property(Node)
    nodePercentageLayout: Node = null;

    @render(Rounds.RoundStore, (store) => store.userBetPercentage)
    handleUserBetPercentage(userBetPercentage: gc.GameServiceMessage.UserBetPercentage) {
        const harrisBetPercentage = userBetPercentage?.[BetChoice.Harris] ?? 0;
        const trumpBetPercentage = userBetPercentage?.[BetChoice.Trump] ?? 0;
        const isShowProgressDefault = harrisBetPercentage === 0 && trumpBetPercentage === 0;
        this.updateProgressBar(harrisBetPercentage, isShowProgressDefault);
    }
    updateProgressBar(progress: number, isShowProgressDefault: boolean) {
        this.nodePercentageLayout.active = !isShowProgressDefault;
        const progressBarLayout = this.nodePercentageLayout.getComponent(Layout);
        const progressBarTransform = this.nodePercentageLayout.getComponent(UITransform);
        const widthDefault = progressBarTransform.width;
        if (progressBarLayout) {
            const [headNode, tailNode] = progressBarLayout.node.children;
            const headUITransform = headNode.getComponent(UITransform);
            const tailUITransform = tailNode.getComponent(UITransform);

            if (headUITransform && tailUITransform) {
                headUITransform.width = progress * (widthDefault / 100);
                tailUITransform.width = widthDefault - headUITransform.width;
            }
        }
    }
}
