> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/withmicrogamepad()](https://developer.apple.com/documentation/gamecontroller/gccontroller/withmicrogamepad())

# withMicroGamepad() (Swift)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns a snapshot of a newly created controller with a micro gamepad profile.

## Declaration

```swift
class func withMicroGamepad() -> GCController
```

<a id="return-value"></a>

## Return Value

A snapshot with a micro gamepad profile.

<a id="Discussion"></a>

## Discussion

A snapshot is a copy of a real or virtual controller at a moment in time with its current element values. Unlike other controllers, you can set the values of a snapshot’s [GCControllerElement](../gccontrollerelement.md) objects.

## See Also

### Creating snapshots

- [withExtendedGamepad()](withextendedgamepad%28%29.md): Returns a snapshot of a newly created controller with an extended gamepad profile.
- [capture()](capture%28%29.md): Returns a snapshot of the controller with its current element values.
- [isSnapshot](issnapshot.md): A Boolean value that indicates whether the controller is a snapshot of a controller.

# controllerWithMicroGamepad (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns a snapshot of a newly created controller with a micro gamepad profile.

## Declaration

```objectivec
+ (GCController *) controllerWithMicroGamepad;
```

<a id="return-value"></a>

## Return Value

A snapshot with a micro gamepad profile.

<a id="Discussion"></a>

## Discussion

A snapshot is a copy of a real or virtual controller at a moment in time with its current element values. Unlike other controllers, you can set the values of a snapshot’s [GCControllerElement](../gccontrollerelement.md) objects.

## See Also

### Creating snapshots

- [controllerWithExtendedGamepad](withextendedgamepad%28%29.md): Returns a snapshot of a newly created controller with an extended gamepad profile.
- [capture](capture%28%29.md): Returns a snapshot of the controller with its current element values.
- [snapshot](issnapshot.md): A Boolean value that indicates whether the controller is a snapshot of a controller.
