> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicenotificationname/wasadded](https://developer.apple.com/documentation/metal/mtldevicenotificationname/wasadded)

# wasAdded (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A notification that Metal sends to observers when the system adds a GPU device.

> Device notifications are not applicable on Apple Silicon

## Declaration

```swift
static let wasAdded: MTLDeviceNotificationName
```

## Mentioned In

- [Handling external GPU additions and removals](../handling-external-gpu-additions-and-removals.md)

## See Also

### Creating a notification name

- [removalRequested](removalrequested.md): Deprecated. A notification that Metal sends to observers when a person requests to remove a GPU device from the system.
- [wasRemoved](wasremoved.md): Deprecated. A notification that Metal sends to observers when the system removes a GPU device.
- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates a Metal device notification name from a string.

# MTLDeviceWasAddedNotification (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** macOS 10.13+ (deprecated in 27.0)

A notification that Metal sends to observers when the system adds a GPU device.

> Device notifications are not applicable on Apple Silicon

## Declaration

```objectivec
extern MTLDeviceNotificationName const MTLDeviceWasAddedNotification;
```

## Mentioned In

- [Handling external GPU additions and removals](../handling-external-gpu-additions-and-removals.md)

## See Also

### Creating a notification name

- [MTLDeviceRemovalRequestedNotification](removalrequested.md): Deprecated. A notification that Metal sends to observers when a person requests to remove a GPU device from the system.
- [MTLDeviceWasRemovedNotification](wasremoved.md): Deprecated. A notification that Metal sends to observers when the system removes a GPU device.
