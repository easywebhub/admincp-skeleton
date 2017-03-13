import {
    PLATFORM
} from 'aurelia-pal';
export class STORAGE {
    static readonly tokenKey: string = 'authenToken';
    static readonly userInfoKey: string = 'userInfo';
    constructor() {

    }

    get(key: string): string {

        let data = PLATFORM.global['localStorage'].getItem(key);
        return JSON.parse(data);
    }

    set(key: string, value: string) {
        let data = JSON.stringify(value);
        PLATFORM.global['localStorage'].setItem(key, data);
    }

    remove(key: string) {
        PLATFORM.global['localStorage'].removeItem(key);
    }
}