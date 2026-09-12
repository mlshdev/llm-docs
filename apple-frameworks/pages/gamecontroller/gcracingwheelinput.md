> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheelinput](https://developer.apple.com/documentation/gamecontroller/gcracingwheelinput)

# GCRacingWheelInput (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

A controller profile that supports a racing wheel.

## Declaration

```swift
class GCRacingWheelInput
```

## Mentioned In

- [Handling input events](handling-input-events.md)

## Topics

### Creating snapshots

- [capture()](gcracingwheelinput/capture%28%29.md): Returns a snapshot of the racing wheel inputs.

### Polling for input

- [nextInputState()](gcracingwheelinput/nextinputstate%28%29.md): Returns the next input state of the racing wheel from the queue.

## Relationships

### Inherits From

- [GCRacingWheelInputState](gcracingwheelinputstate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GCDevicePhysicalInput](gcdevicephysicalinput.md)
- [GCDevicePhysicalInputState](gcdevicephysicalinputstate.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Racing wheel input

- [GCRacingWheelInputState](gcracingwheelinputstate.md): The input for the wheel of a racing wheel controller.

# GCRacingWheelInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

A controller profile that supports a racing wheel.

## Declaration

```objectivec
@interface GCRacingWheelInput : GCRacingWheelInputState
```

## Mentioned In

- [Handling input events](handling-input-events.md)

## Topics

### Creating snapshots

- [capture](gcracingwheelinput/capture%28%29.md): Returns a snapshot of the racing wheel inputs.

### Polling for input

- [nextInputState](gcracingwheelinput/nextinputstate%28%29.md): Returns the next input state of the racing wheel from the queue.

## Relationships

### Inherits From

- [GCRacingWheelInputState](gcracingwheelinputstate.md)

### Conforms To

- [GCDevicePhysicalInput](gcdevicephysicalinput.md)

## See Also

### Racing wheel input

- [GCRacingWheelInputState](gcracingwheelinputstate.md): The input for the wheel of a racing wheel controller.
