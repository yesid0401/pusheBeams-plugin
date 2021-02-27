package app.tissini.pusherBeams;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import com.pusher.pushnotifications.PushNotifications;
import java.util.Set;

@NativePlugin
public class PusherBeamsPlugin extends Plugin {


    @PluginMethod()
    public void getDeviceInterests(PluginCall call) {
        Set<String> interests = PushNotifications.getDeviceInterests();
        JSObject ret = new JSObject();
        ret.put("interests : ", interests);
        call.success(ret);
    }
    
    @PluginMethod()
    public void addDeviceInterest(PluginCall call) {
        String interest = call.getString("interest");
        PushNotifications.addDeviceInterest(interest);
        JSObject ret = new JSObject();
        ret.put("message", "interest added successfully "+interest );
        call.success(ret);
    }

    @PluginMethod()
    public void removeDeviceInterest(PluginCall call) {
        String interest = call.getString("interest");
        PushNotifications.removeDeviceInterest(interest);
        JSObject ret = new JSObject();
        ret.put("message", "interest has been successfully removed " +interest );
        call.success(ret);
    }

    @PluginMethod()
    public void  clearDeviceInterests(PluginCall call){
        PushNotifications.clearDeviceInterests();
        JSObject ret = new JSObject();
        ret.put("message", "successfully removed interests");
        call.success(ret);
    }
    
}
