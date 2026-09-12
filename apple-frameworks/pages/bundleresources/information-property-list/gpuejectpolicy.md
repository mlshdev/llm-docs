> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/gpuejectpolicy](https://developer.apple.com/documentation/bundleresources/information-property-list/gpuejectpolicy)

# GPUEjectPolicy (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

The preferred system action when an external GPU is connected from the system.

## Details

`GPUEjectPolicy`

## Possible Values

- `relaunch`: Set this value to allow macOS to quit and relaunch your app with another GPU. Your app can implement the [application(\_:willEncodeRestorableState:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application%28_:willencoderestorablestate:%29) method to save any state before it quits, and it can implement the [application(\_:didDecodeRestorableState:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application%28_:diddecoderestorablestate:%29) method to restore any saved state after it relaunches.
- `wait`: Set this value to manually respond to the safe disconnect request. Your app must register and respond to the [removalRequested](../../metal/mtldevicenotificationname/removalrequested.md) notification posted by Metal. macOS waits for your app to remove all references to the external GPU before notifying the user that it’s safe to disconnect the GPU.
- `kill`: Set this value to allow macOS to force your app to quit.
- `ignore`: Tells the system to ignore the disconnect message. Don’t use this key in new macOS apps.

## See Also

### Graphics

- [UIAppSupportsHDR](uiappsupportshdr.md): A Boolean value that indicates whether the app supports HDR mode on Apple TV 4K.
- [NSHighResolutionCapable](nshighresolutioncapable.md): A Boolean value indicating whether the Cocoa app supports high-resolution displays.
- [NSSupportsAutomaticGraphicsSwitching](nssupportsautomaticgraphicsswitching.md): A Boolean value indicating whether an OpenGL app may utilize the integrated GPU.
- [GPUSelectionPolicy](gpuselectionpolicy.md): The app’s preference for whether it wants to use external graphics processors.
- [CADisableMinimumFrameDurationOnPhone](cadisableminimumframedurationonphone.md): A Boolean value that allows your app to access frame rates higher than the system’s default.

# GPUEjectPolicy (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.14+

The preferred system action when an external GPU is connected from the system.

## Details

`GPUEjectPolicy`

## Possible Values

- `relaunch`: Set this value to allow macOS to quit and relaunch your app with another GPU. Your app can implement the [application:willEncodeRestorableState:](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application%28_:willencoderestorablestate:%29) method to save any state before it quits, and it can implement the [application:didDecodeRestorableState:](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application%28_:diddecoderestorablestate:%29) method to restore any saved state after it relaunches.
- `wait`: Set this value to manually respond to the safe disconnect request. Your app must register and respond to the [MTLDeviceRemovalRequestedNotification](../../metal/mtldevicenotificationname/removalrequested.md) notification posted by Metal. macOS waits for your app to remove all references to the external GPU before notifying the user that it’s safe to disconnect the GPU.
- `kill`: Set this value to allow macOS to force your app to quit.
- `ignore`: Tells the system to ignore the disconnect message. Don’t use this key in new macOS apps.

## See Also

### Graphics

- [UIAppSupportsHDR](uiappsupportshdr.md): A Boolean value that indicates whether the app supports HDR mode on Apple TV 4K.
- [NSHighResolutionCapable](nshighresolutioncapable.md): A Boolean value indicating whether the Cocoa app supports high-resolution displays.
- [NSSupportsAutomaticGraphicsSwitching](nssupportsautomaticgraphicsswitching.md): A Boolean value indicating whether an OpenGL app may utilize the integrated GPU.
- [GPUSelectionPolicy](gpuselectionpolicy.md): The app’s preference for whether it wants to use external graphics processors.
- [CADisableMinimumFrameDurationOnPhone](cadisableminimumframedurationonphone.md): A Boolean value that allows your app to access frame rates higher than the system’s default.
