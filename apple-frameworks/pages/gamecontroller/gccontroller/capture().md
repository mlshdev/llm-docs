> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/capture()](https://developer.apple.com/documentation/gamecontroller/gccontroller/capture())

# capture() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns a snapshot of the controller with its current element values.

## Declaration

```swift
func capture() -> GCController
```

<a id="return-value"></a>

## Return Value

A snapshot of the controller.

<a id="Discussion"></a>

## Discussion

A snapshot is a copy of a real or virtual controller at a moment in time with its current element values. Unlike other controllers, you can set the values of a snapshot’s [GCControllerElement](../gccontrollerelement.md) objects.

## See Also

### Creating snapshots

- [withExtendedGamepad()](withextendedgamepad%28%29.md): Returns a snapshot of a newly created controller with an extended gamepad profile.
- [withMicroGamepad()](withmicrogamepad%28%29.md): Returns a snapshot of a newly created controller with a micro gamepad profile.
- [isSnapshot](issnapshot.md): A Boolean value that indicates whether the controller is a snapshot of a controller.

# capture (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Returns a snapshot of the controller with its current element values.

## Declaration

```objectivec
- (GCController *) capture;
```

<a id="return-value"></a>

## Return Value

A snapshot of the controller.

<a id="Discussion"></a>

## Discussion

A snapshot is a copy of a real or virtual controller at a moment in time with its current element values. Unlike other controllers, you can set the values of a snapshot’s [GCControllerElement](../gccontrollerelement.md) objects.

## See Also

### Creating snapshots

- [controllerWithExtendedGamepad](withextendedgamepad%28%29.md): Returns a snapshot of a newly created controller with an extended gamepad profile.
- [controllerWithMicroGamepad](withmicrogamepad%28%29.md): Returns a snapshot of a newly created controller with a micro gamepad profile.
- [snapshot](issnapshot.md): A Boolean value that indicates whether the controller is a snapshot of a controller.
