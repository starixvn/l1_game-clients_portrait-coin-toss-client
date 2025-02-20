export class Tween<T = any> {
    static stopAllByTarget = jest.fn().mockReturnThis();

    stop = jest.fn();
}

export const tweenInstance = {
    to: jest.fn().mockReturnThis(),
    by: jest.fn().mockReturnThis(),
    start: jest.fn().mockReturnThis(),
    stop: jest.fn().mockReturnThis(),
    repeatForever: jest.fn().mockReturnThis(),
};

export const tween = jest.fn().mockReturnValue(tweenInstance);
