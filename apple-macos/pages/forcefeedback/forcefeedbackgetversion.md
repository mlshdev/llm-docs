> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/forcefeedbackgetversion](https://developer.apple.com/documentation/forcefeedback/forcefeedbackgetversion)

# ForceFeedbackGetVersion

**Interface languages:** Swift, Objective-C

**Framework:** Force Feedback  
**Kind:** Article

This function is used to determine driver and API version information.

<a id="overview"></a>

## Overview

```c
HRESULT ( *ForceFeedbackGetVersion) (
   void *self,
   ForceFeedbackVersion *version);
```

<a id="Parameters"></a>

### Parameters

- **self**: Pointer to the FFPlugInDriver implementation instance.
- **version**: Pointer to ForceFeedbackVersion structure that is to receive the required info. See the structure description for details.

<a id="Return-Value"></a>

### Return Value

Returns FF_OK if successful, or an error value otherwise.

## See Also

### Miscellaneous

- [DestroyEffect](destroyeffect.md): This function commands the device to “destroy” a currently downloaded effect. The effect ID and any data that is associated with the effect are freed and available for reallocation.
- [DownloadEffect](downloadeffect.md): This function sends an effect to the device.
- [Escape](escape.md): This function escapes to the driver. This method is called in response to an application invoking the FFEffectEscape or FFDeviceEscape methods.
- [GetEffectStatus](geteffectstatus.md): This function returns the device effect’s status.
- [GetForceFeedbackCapabilities](getforcefeedbackcapabilities.md): This function escapes to the driver. This method is called in response to an application invoking the FFEffectEscape or FFDevicEscape methods.
- [GetForceFeedbackState](getforcefeedbackstate.md): This function returns the state of the device.
- [InitializeTerminate](initializeterminate.md): This function is used to “create and destroy” particular device instances. It provides the FF plug-in driver with all the necessary start-up parameters.
- [SendForceFeedbackCommand](sendforcefeedbackcommand.md): This function sends a command to the device.
- [SetProperty](setproperty.md): This function sets properties that define the device behavior.
- [StartEffect](starteffect.md): This function commands the device to play back an effect that was previously loaded.
- [StopEffect](stopeffect.md): This function commands the device to stop an effect that was previously started.
