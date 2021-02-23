declare module '@capacitor/core' {
  interface PluginRegistry {
    PusherBeamsPlugin: PusherBeamsPluginPlugin;
  }
}

export interface PusherBeamsPluginPlugin {
  addDeviceInterest(options: { interest: string }): Promise<{ message: string }>;
  removeDeviceInterest(options: { interest: string }): Promise<{ message: string }>;
}
