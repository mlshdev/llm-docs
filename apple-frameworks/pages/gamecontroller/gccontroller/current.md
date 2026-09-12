> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/current](https://developer.apple.com/documentation/gamecontroller/gccontroller/current)

# current (Swift)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The most recently used game controller.

## Declaration

```swift
class var current: GCController? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property for a single-player game when you don’t need to distinguish the input from multiple controllers simultaneously.

## See Also

### Handling multiple controllers

- [GCControllerDidBecomeCurrent](../../foundation/nsnotification/name-swift.struct/gccontrollerdidbecomecurrent.md): A notification that posts when a controller becomes the current controller.
- [GCControllerDidStopBeingCurrent](../../foundation/nsnotification/name-swift.struct/gccontrollerdidstopbeingcurrent.md): A notification that posts when a controller stops being the current controller.

# current (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The most recently used game controller.

## Declaration

```objectivec
@property (class, atomic, strong, readonly, nullable) GCController * current;
```

<a id="Discussion"></a>

## Discussion

Use this property for a single-player game when you don’t need to distinguish the input from multiple controllers simultaneously.

## See Also

### Handling multiple controllers

- [GCControllerDidBecomeCurrentNotification](../gccontrollerdidbecomecurrentnotification.md): A notification that posts when a controller becomes the current controller.
- [GCControllerDidStopBeingCurrentNotification](../gccontrollerdidstopbeingcurrentnotification.md): A notification that posts when a controller stops being the current controller.
