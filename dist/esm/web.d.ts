import { WebPlugin } from '@capacitor/core';
import { PusherBeamsPluginPlugin } from './definitions';
export declare class PusherBeamsPluginWeb extends WebPlugin implements PusherBeamsPluginPlugin {
    constructor();
    getDeviceInterests(): Promise<{
        interests: Array<String>;
    }>;
    addDeviceInterest(options: {
        interest: string;
    }): Promise<{
        message: string;
    }>;
    removeDeviceInterest(options: {
        interest: string;
    }): Promise<{
        message: string;
    }>;
    clearDeviceInterests(): Promise<{
        message: string;
    }>;
}
declare const PusherBeamsPlugin: PusherBeamsPluginWeb;
export { PusherBeamsPlugin };
