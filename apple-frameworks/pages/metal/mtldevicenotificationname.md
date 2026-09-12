> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicenotificationname](https://developer.apple.com/documentation/metal/mtldevicenotificationname)

# MTLDeviceNotificationName (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A notification that represents a change to a GPU device in the system.

> Device notifications are not applicable on Apple Silicon

## Declaration

```swift
struct MTLDeviceNotificationName
```

## Topics

### Creating a notification name

- [wasAdded](mtldevicenotificationname/wasadded.md): Deprecated. A notification that Metal sends to observers when the system adds a GPU device.
- [removalRequested](mtldevicenotificationname/removalrequested.md): Deprecated. A notification that Metal sends to observers when a person requests to remove a GPU device from the system.
- [wasRemoved](mtldevicenotificationname/wasremoved.md): Deprecated. A notification that Metal sends to observers when the system removes a GPU device.
- [init(rawValue:)](mtldevicenotificationname/init%28rawvalue_%29.md): Deprecated. Creates a Metal device notification name from a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Locating GPUs

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md): Locate, identify, and choose suitable GPUs for your app.
- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevices()](mtlcopyalldevices%28%29.md): Returns an array of all the Metal device instances in the system.
- [MTLCopyAllDevicesWithObserver(handler:)](mtlcopyalldeviceswithobserver%28handler_%29.md): Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [MTLRemoveDeviceObserver(\_:)](mtlremovedeviceobserver%28__%29.md): Deprecated. Removes a registered observer of device notifications.
- [CGDirectDisplayCopyCurrentMetalDevice(\_:)](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationHandler](mtldevicenotificationhandler.md): Deprecated. A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.

# MTLDeviceNotificationName (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A notification that represents a change to a GPU device in the system.

> Device notifications are not applicable on Apple Silicon

## Declaration

```objectivec
typedef NSString * MTLDeviceNotificationName;
```

## Topics

### Creating a notification name

- [MTLDeviceWasAddedNotification](mtldevicenotificationname/wasadded.md): Deprecated. A notification that Metal sends to observers when the system adds a GPU device.
- [MTLDeviceRemovalRequestedNotification](mtldevicenotificationname/removalrequested.md): Deprecated. A notification that Metal sends to observers when a person requests to remove a GPU device from the system.
- [MTLDeviceWasRemovedNotification](mtldevicenotificationname/wasremoved.md): Deprecated. A notification that Metal sends to observers when the system removes a GPU device.

## See Also

### Locating GPUs

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md): Locate, identify, and choose suitable GPUs for your app.
- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevices](mtlcopyalldevices%28%29.md): Returns an array of all the Metal device instances in the system.
- [MTLCopyAllDevicesWithObserver](mtlcopyalldeviceswithobserver.md): Deprecated. Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [MTLRemoveDeviceObserver](mtlremovedeviceobserver%28__%29.md): Deprecated. Removes a registered observer of device notifications.
- [CGDirectDisplayCopyCurrentMetalDevice](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationHandler](mtldevicenotificationhandler.md): Deprecated. A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.
