> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmouse/current](https://developer.apple.com/documentation/gamecontroller/gcmouse/current)

# current (Swift)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The most recent mouse that the user connects.

## Declaration

```swift
class var current: GCMouse? { get }
```

## See Also

### Handling multiple mouse devices

- [GCMouseDidBecomeCurrent](../../foundation/nsnotification/name-swift.struct/gcmousedidbecomecurrent.md): A notification that posts when a mouse becomes the most recent mouse that the user connects.
- [GCMouseDidStopBeingCurrent](../../foundation/nsnotification/name-swift.struct/gcmousedidstopbeingcurrent.md): A notification that posts when a mouse stops being the most recent mouse that the user connects.

# current (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The most recent mouse that the user connects.

## Declaration

```objectivec
@property (class, atomic, strong, readonly, nullable) GCMouse * current;
```

## See Also

### Handling multiple mouse devices

- [GCMouseDidBecomeCurrentNotification](../gcmousedidbecomecurrentnotification.md): A notification that posts when a mouse becomes the most recent mouse that the user connects.
- [GCMouseDidStopBeingCurrentNotification](../gcmousedidstopbeingcurrentnotification.md): A notification that posts when a mouse stops being the most recent mouse that the user connects.
