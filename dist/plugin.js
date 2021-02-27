var capacitorPlugin = (function (exports, core) {
    'use strict';

    class PusherBeamsPluginWeb extends core.WebPlugin {
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
    core.registerWebPlugin(PusherBeamsPlugin);

    exports.PusherBeamsPlugin = PusherBeamsPlugin;
    exports.PusherBeamsPluginWeb = PusherBeamsPluginWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
