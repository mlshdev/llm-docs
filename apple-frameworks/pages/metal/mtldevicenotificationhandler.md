> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicenotificationhandler](https://developer.apple.com/documentation/metal/mtldevicenotificationhandler)

# MTLDeviceNotificationHandler (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.

> Device notifications are not applicable on Apple Silicon

## Declaration

```swift
typealias MTLDeviceNotificationHandler = @Sendable (any MTLDevice, MTLDeviceNotificationName) -> Void
```

## Parameters

- `device`: An [MTLDevice](mtldevice.md) that represents the GPU that’s sending the notification.
- `notifyName`: A notification that represents a change to a GPU device in the system.

## See Also

### Locating GPUs

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md): Locate, identify, and choose suitable GPUs for your app.
- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevices()](mtlcopyalldevices%28%29.md): Returns an array of all the Metal device instances in the system.
- [MTLCopyAllDevicesWithObserver(handler:)](mtlcopyalldeviceswithobserver%28handler_%29.md): Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [MTLRemoveDeviceObserver(\_:)](mtlremovedeviceobserver%28__%29.md): Deprecated. Removes a registered observer of device notifications.
- [CGDirectDisplayCopyCurrentMetalDevice(\_:)](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationName](mtldevicenotificationname.md): Deprecated. A notification that represents a change to a GPU device in the system.

# MTLDeviceNotificationHandler (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.

> Device notifications are not applicable on Apple Silicon

## Declaration

```objectivec
typedef void (^)(id<MTLDevice>, NSString *) MTLDeviceNotificationHandler;
```

## Parameters

- `device`: An [MTLDevice](mtldevice.md) that represents the GPU that’s sending the notification.
- `notifyName`: A notification that represents a change to a GPU device in the system.

## See Also

### Locating GPUs

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md): Locate, identify, and choose suitable GPUs for your app.
- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevices](mtlcopyalldevices%28%29.md): Returns an array of all the Metal device instances in the system.
- [MTLCopyAllDevicesWithObserver](mtlcopyalldeviceswithobserver.md): Deprecated. Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [MTLRemoveDeviceObserver](mtlremovedeviceobserver%28__%29.md): Deprecated. Removes a registered observer of device notifications.
- [CGDirectDisplayCopyCurrentMetalDevice](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationName](mtldevicenotificationname.md): Deprecated. A notification that represents a change to a GPU device in the system.
