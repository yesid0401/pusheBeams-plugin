import { WebPlugin } from '@capacitor/core';
export class PusherBeamsPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'PusherBeamsPlugin',
            platforms: ['web'],
        });
    }
    getDeviceInterests() {
        throw new Error("Method not implemented.");
    }
    addDeviceInterest(options) {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    removeDeviceInterest(options) {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    clearDeviceInterests() {
        throw new Error("Method not implemented.");
    }
}
const PusherBeamsPlugin = new PusherBeamsPluginWeb();
export { PusherBeamsPlugin };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(PusherBeamsPlugin);
//# sourceMappingURL=web.js.map