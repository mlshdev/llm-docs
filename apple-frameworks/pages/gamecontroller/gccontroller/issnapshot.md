> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/issnapshot](https://developer.apple.com/documentation/gamecontroller/gccontroller/issnapshot)

# isSnapshot (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the controller is a snapshot of a controller.

## Declaration

```swift
var isSnapshot: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the controller is a snapshot of a controller. A snapshot is a copy of a real or virtual controller at a moment in time with its current element values. If [false](https://developer.apple.com/documentation/swift/false), the controller is a real or virtual controller.

## See Also

### Creating snapshots

- [withExtendedGamepad()](withextendedgamepad%28%29.md): Returns a snapshot of a newly created controller with an extended gamepad profile.
- [withMicroGamepad()](withmicrogamepad%28%29.md): Returns a snapshot of a newly created controller with a micro gamepad profile.
- [capture()](capture%28%29.md): Returns a snapshot of the controller with its current element values.

# snapshot (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the controller is a snapshot of a controller.

## Declaration

```objectivec
@property (readonly, getter=isSnapshot) BOOL snapshot;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the controller is a snapshot of a controller. A snapshot is a copy of a real or virtual controller at a moment in time with its current element values. If [false](https://developer.apple.com/documentation/swift/false), the controller is a real or virtual controller.

## See Also

### Creating snapshots

- [controllerWithExtendedGamepad](withextendedgamepad%28%29.md): Returns a snapshot of a newly created controller with an extended gamepad profile.
- [controllerWithMicroGamepad](withmicrogamepad%28%29.md): Returns a snapshot of a newly created controller with a micro gamepad profile.
- [capture](capture%28%29.md): Returns a snapshot of the controller with its current element values.
