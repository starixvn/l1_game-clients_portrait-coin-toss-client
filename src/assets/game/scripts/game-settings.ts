const GAME_NAME = "CoinToss";

export const settings = {
    id: 80,
    name: GAME_NAME,
    observerNamespace: GAME_NAME,
    namespaces: [GAME_NAME],
    durations: {
        wholeRound: 29,
        lockingBet: 3,
        placingBet: 20,
        generatingResult: 2,
        startRound: 3,
    },
    numberOfRoundHistory: 100,
};
