> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicenotificationname/removalrequested](https://developer.apple.com/documentation/metal/mtldevicenotificationname/removalrequested)

# removalRequested (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A notification that Metal sends to observers when a person requests to remove a GPU device from the system.

> Device notifications are not applicable on Apple Silicon

## Declaration

```swift
static let removalRequested: MTLDeviceNotificationName
```

## Mentioned In

- [Handling external GPU additions and removals](../handling-external-gpu-additions-and-removals.md)

<a id="discussion"></a>

## Discussion

This notification tells your app to stop using an [MTLDevice](../mtldevice.md) instance by releasing any objects and resources your app created with it.

> **Note**

>  Metal removes the device instance from the array it returns with its methods — such as [MTLCopyAllDevices()](../mtlcopyalldevices%28%29.md) — before sending this notification.

## See Also

### Creating a notification name

- [wasAdded](wasadded.md): Deprecated. A notification that Metal sends to observers when the system adds a GPU device.
- [wasRemoved](wasremoved.md): Deprecated. A notification that Metal sends to observers when the system removes a GPU device.
- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates a Metal device notification name from a string.

# MTLDeviceRemovalRequestedNotification (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A notification that Metal sends to observers when a person requests to remove a GPU device from the system.

> Device notifications are not applicable on Apple Silicon

## Declaration

```objectivec
extern MTLDeviceNotificationName const MTLDeviceRemovalRequestedNotification;
```

## Mentioned In

- [Handling external GPU additions and removals](../handling-external-gpu-additions-and-removals.md)

<a id="discussion"></a>

## Discussion

This notification tells your app to stop using an [MTLDevice](../mtldevice.md) instance by releasing any objects and resources your app created with it.

> **Note**

>  Metal removes the device instance from the array it returns with its methods — such as [MTLCopyAllDevices](../mtlcopyalldevices%28%29.md) — before sending this notification.

## See Also

### Creating a notification name

- [MTLDeviceWasAddedNotification](wasadded.md): Deprecated. A notification that Metal sends to observers when the system adds a GPU device.
- [MTLDeviceWasRemovedNotification](wasremoved.md): Deprecated. A notification that Metal sends to observers when the system removes a GPU device.
