> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlremovedeviceobserver(_:)](https://developer.apple.com/documentation/metal/mtlremovedeviceobserver(_:))

# MTLRemoveDeviceObserver(\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** macOS 10.13+ (deprecated in 27.0)

Removes a registered observer of device notifications.

> Device notifications are not applicable on Apple Silicon

## Declaration

```swift
func MTLRemoveDeviceObserver(_ observer: any NSObjectProtocol)
```

## Parameters

- `observer`: An object instance that represents the observer the [MTLCopyAllDevicesWithObserver(handler:)](mtlcopyalldeviceswithobserver%28handler_%29.md) function creates.

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md)
- [Handling external GPU additions and removals](handling-external-gpu-additions-and-removals.md)

## See Also

### Locating GPUs

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md): Locate, identify, and choose suitable GPUs for your app.
- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevices()](mtlcopyalldevices%28%29.md): Returns an array of all the Metal device instances in the system.
- [MTLCopyAllDevicesWithObserver(handler:)](mtlcopyalldeviceswithobserver%28handler_%29.md): Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [CGDirectDisplayCopyCurrentMetalDevice(\_:)](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationHandler](mtldevicenotificationhandler.md): Deprecated. A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.
- [MTLDeviceNotificationName](mtldevicenotificationname.md): Deprecated. A notification that represents a change to a GPU device in the system.

# MTLRemoveDeviceObserver (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** macOS 10.13+ (deprecated in 27.0)

Removes a registered observer of device notifications.

> Device notifications are not applicable on Apple Silicon

## Declaration

```objectivec
extern void MTLRemoveDeviceObserver(id<NSObject>observer);
```

## Parameters

- `observer`: An object instance that represents the observer the [MTLCopyAllDevicesWithObserver(handler:)](mtlcopyalldeviceswithobserver%28handler_%29.md) function creates.

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md)
- [Handling external GPU additions and removals](handling-external-gpu-additions-and-removals.md)

## See Also

### Locating GPUs

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md): Locate, identify, and choose suitable GPUs for your app.
- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevices](mtlcopyalldevices%28%29.md): Returns an array of all the Metal device instances in the system.
- [MTLCopyAllDevicesWithObserver](mtlcopyalldeviceswithobserver.md): Deprecated. Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [CGDirectDisplayCopyCurrentMetalDevice](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationHandler](mtldevicenotificationhandler.md): Deprecated. A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.
- [MTLDeviceNotificationName](mtldevicenotificationname.md): Deprecated. A notification that represents a change to a GPU device in the system.
