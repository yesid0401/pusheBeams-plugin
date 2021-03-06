import { WebPlugin } from '@capacitor/core';
import { PusherBeamsPluginPlugin } from './definitions';

export class PusherBeamsPluginWeb extends WebPlugin implements PusherBeamsPluginPlugin {
  constructor() {
    super({
      name: 'PusherBeamsPlugin',
      platforms: ['web'],
    });
  }

  getDeviceInterests(): Promise<{ interests: Array<String> }>{
    throw new Error("Method not implemented.");
  }

  addDeviceInterest(options: { interest: string; }): Promise<{ message: string }> {
    console.log(options);
    throw new Error("Method not implemented.");
  }

  removeDeviceInterest(options: { interest: string; }): Promise<{ message: string }> {
    console.log(options);
    throw new Error("Method not implemented.");
  }

  clearDeviceInterests(): Promise<{ message: string }>{
    throw new Error("Method not implemented.");
  }

}

const PusherBeamsPlugin = new PusherBeamsPluginWeb();

export { PusherBeamsPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(PusherBeamsPlugin);
