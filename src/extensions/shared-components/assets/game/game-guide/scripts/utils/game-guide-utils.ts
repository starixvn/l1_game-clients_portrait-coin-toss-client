import { find, tween, v3, view } from "cc";
import WebViewGuide from "../web-view-guide";

export class GameGuideUtils {
    private static webViewGuideInstance: WebViewGuide | null = null;

    private static getWebViewGuide(): WebViewGuide | null {
        if (!GameGuideUtils.webViewGuideInstance) {
            const canvas = find("Canvas");
            if (!canvas) {
                return null;
            }

            GameGuideUtils.webViewGuideInstance = canvas.getComponentInChildren(WebViewGuide) || null;
        }

        return GameGuideUtils.webViewGuideInstance;
    }

    static moveWebViewGuide(isLeftCorner: boolean): Promise<void> {
        return new Promise((resolve) => {
            const webViewGuide = GameGuideUtils.getWebViewGuide();
            if (!webViewGuide?.node) {
                resolve();
                return;
            }

            const duration = isLeftCorner ? 0.1 : 0.2;
            const visibleWidth = view.getVisibleSize().width;
            const positionX = isLeftCorner ? -visibleWidth : 0;
            const tweenEasing = isLeftCorner ? "sineOut" : "sineIn";

            tween(webViewGuide.node)
                .to(duration, { position: v3(positionX, 0, 0) }, { easing: tweenEasing })
                .call(() => {
                    resolve();
                })
                .start();
        });
    }
}
