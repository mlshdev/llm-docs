> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicenotificationname/wasremoved](https://developer.apple.com/documentation/metal/mtldevicenotificationname/wasremoved)

# wasRemoved (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A notification that Metal sends to observers when the system removes a GPU device.

> Device notifications are not applicable on Apple Silicon

## Declaration

```swift
static let wasRemoved: MTLDeviceNotificationName
```

## Mentioned In

- [Handling external GPU additions and removals](../handling-external-gpu-additions-and-removals.md)

<a id="discussion"></a>

## Discussion

This notification tells your app that an [MTLDevice](../mtldevice.md) instance and its methods are no longer valid to avoid runtime failures.

> **Important**

>  If a person removes a GPU without warning, this notification may be posted without a prior [removalRequested](removalrequested.md) notification.

## See Also

### Creating a notification name

- [wasAdded](wasadded.md): Deprecated. A notification that Metal sends to observers when the system adds a GPU device.
- [removalRequested](removalrequested.md): Deprecated. A notification that Metal sends to observers when a person requests to remove a GPU device from the system.
- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates a Metal device notification name from a string.

# MTLDeviceWasRemovedNotification (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A notification that Metal sends to observers when the system removes a GPU device.

> Device notifications are not applicable on Apple Silicon

## Declaration

```objectivec
extern MTLDeviceNotificationName const MTLDeviceWasRemovedNotification;
```

## Mentioned In

- [Handling external GPU additions and removals](../handling-external-gpu-additions-and-removals.md)

<a id="discussion"></a>

## Discussion

This notification tells your app that an [MTLDevice](../mtldevice.md) instance and its methods are no longer valid to avoid runtime failures.

> **Important**

>  If a person removes a GPU without warning, this notification may be posted without a prior [MTLDeviceRemovalRequestedNotification](removalrequested.md) notification.

## See Also

### Creating a notification name

- [MTLDeviceWasAddedNotification](wasadded.md): Deprecated. A notification that Metal sends to observers when the system adds a GPU device.
- [MTLDeviceRemovalRequestedNotification](removalrequested.md): Deprecated. A notification that Metal sends to observers when a person requests to remove a GPU device from the system.
