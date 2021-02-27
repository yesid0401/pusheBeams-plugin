declare module '@capacitor/core' {
  interface PluginRegistry {
    PusherBeamsPlugin: PusherBeamsPluginPlugin;
  }
}

export interface PusherBeamsPluginPlugin {
  getDeviceInterests(): Promise<{ interests: Array<String> }>;
  addDeviceInterest(options: { interest: string }): Promise<{ message: string }>;
  removeDeviceInterest(options: { interest: string }): Promise<{ message: string }>;
  clearDeviceInterests(): Promise<{ message: string }>;
}
