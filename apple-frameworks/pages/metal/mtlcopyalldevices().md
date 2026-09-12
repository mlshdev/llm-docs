> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcopyalldevices()](https://developer.apple.com/documentation/metal/mtlcopyalldevices())

# MTLCopyAllDevices() (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 18.0+ · visionOS 2.0+

Returns an array of all the Metal device instances in the system.

## Declaration

```swift
func MTLCopyAllDevices() -> [any MTLDevice]
```

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md)

## See Also

### Locating GPUs

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md): Locate, identify, and choose suitable GPUs for your app.
- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevicesWithObserver(handler:)](mtlcopyalldeviceswithobserver%28handler_%29.md): Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [MTLRemoveDeviceObserver(\_:)](mtlremovedeviceobserver%28__%29.md): Deprecated. Removes a registered observer of device notifications.
- [CGDirectDisplayCopyCurrentMetalDevice(\_:)](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationHandler](mtldevicenotificationhandler.md): Deprecated. A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.
- [MTLDeviceNotificationName](mtldevicenotificationname.md): Deprecated. A notification that represents a change to a GPU device in the system.

# MTLCopyAllDevices (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 18.0+ · visionOS 2.0+

Returns an array of all the Metal device instances in the system.

## Declaration

```objectivec
extern NSArray<id<MTLDevice>> *MTLCopyAllDevices();
```

## Mentioned In

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md)

## See Also

### Locating GPUs

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md): Locate, identify, and choose suitable GPUs for your app.
- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevicesWithObserver](mtlcopyalldeviceswithobserver.md): Deprecated. Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [MTLRemoveDeviceObserver](mtlremovedeviceobserver%28__%29.md): Deprecated. Removes a registered observer of device notifications.
- [CGDirectDisplayCopyCurrentMetalDevice](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationHandler](mtldevicenotificationhandler.md): Deprecated. A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.
- [MTLDeviceNotificationName](mtldevicenotificationname.md): Deprecated. A notification that represents a change to a GPU device in the system.
