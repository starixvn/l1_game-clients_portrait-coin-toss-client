window.envConfig = {
    isDev: false, // if this property is true, then you should add token=anything into the querytring to sso to the game http://localhost:7456/?token=anything
    systemType: "VG",
    serverDomainMapper: {
        localhost: "lumigame.com",
    },
    ssl: true,
    subDomain: "l2-proxy2",
    env: "LOCAL",
    subGuideDomain: "l1-guide",
    SGConnectSubDomain: "connectsite",
    enableMsgpackParserAllGames: false,
    enableMsgpackParserOnNotification: false,
    websocket: {
        proxyPath: "colorgame",
        route: "colorgame",
    },
    mainObserverNamespace: "ColorGame",
    tolgeeUrl: "",
    backgroundLocalized: true,
};

console.error("Wrong mapping config, please check your deployment");
