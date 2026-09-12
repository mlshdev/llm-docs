> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcswitchpositioninput](https://developer.apple.com/documentation/gamecontroller/gcswitchpositioninput)

# GCSwitchPositionInput (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of inputs that switch between two or more positions.

## Declaration

```swift
protocol GCSwitchPositionInput : NSObjectProtocol
```

## Topics

### Getting the characteristics

- [positionRange](gcswitchpositioninput/positionrange.md): The range of possible values for the switch.
- [isSequential](gcswitchpositioninput/issequential.md): A Boolean value that indicates whether the position change is sequential.
- [canWrap](gcswitchpositioninput/canwrap.md): A Boolean value that indicates whether the position value wraps when it reaches the range’s minimum or maximum value.

### Getting the position

- [position](gcswitchpositioninput/position.md): The position of the switch.
- [positionDidChangeHandler](gcswitchpositioninput/positiondidchangehandler.md): The block that the profile calls when the value of the switch changes.
- [lastPositionTimestamp](gcswitchpositioninput/lastpositiontimestamp.md): A timestamp for when the profile reports the last position.
- [lastPositionLatency](gcswitchpositioninput/lastpositionlatency.md): The time in seconds between the current and previous positions.

### Getting user actions

- [sources](gcswitchpositioninput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Steering and switch elements

- [GCSteeringWheelElement](gcsteeringwheelelement.md): The element that represents the wheel of a racing wheel controller.

# GCSwitchPositionInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of inputs that switch between two or more positions.

## Declaration

```objectivec
@protocol GCSwitchPositionInput <NSObject>
```

## Topics

### Getting the characteristics

- [positionRange](gcswitchpositioninput/positionrange.md): The range of possible values for the switch.
- [sequential](gcswitchpositioninput/issequential.md): A Boolean value that indicates whether the position change is sequential.
- [canWrap](gcswitchpositioninput/canwrap.md): A Boolean value that indicates whether the position value wraps when it reaches the range’s minimum or maximum value.

### Getting the position

- [position](gcswitchpositioninput/position.md): The position of the switch.
- [positionDidChangeHandler](gcswitchpositioninput/positiondidchangehandler.md): The block that the profile calls when the value of the switch changes.
- [lastPositionTimestamp](gcswitchpositioninput/lastpositiontimestamp.md): A timestamp for when the profile reports the last position.
- [lastPositionLatency](gcswitchpositioninput/lastpositionlatency.md): The time in seconds between the current and previous positions.

### Getting user actions

- [sources](gcswitchpositioninput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Steering and switch elements

- [GCSteeringWheelElement](gcsteeringwheelelement.md): The element that represents the wheel of a racing wheel controller.
- [GCInputSwitchName](gcinputswitchname.md): The Objective-C type for an input switch name.
