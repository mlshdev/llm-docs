> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gclinearinput](https://developer.apple.com/documentation/gamecontroller/gclinearinput)

# GCLinearInput (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of inputs that provide values in unit coordinates.

## Declaration

```swift
protocol GCLinearInput : NSObjectProtocol
```

## Topics

### Getting the characteristics

- [canWrap](gclinearinput/canwrap.md): A Boolean value that indicates whether the input value wraps when it reaches the range’s minimum or maximum value.
- [isAnalog](gclinearinput/isanalog.md): A Boolean value that indicates whether the input provides analog values.

### Getting the value

- [value](gclinearinput/value.md): The value in unit coordinates.
- [valueDidChangeHandler](gclinearinput/valuedidchangehandler.md): The block that the profile calls when an element’s value changes.
- [lastValueTimestamp](gclinearinput/lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](gclinearinput/lastvaluelatency.md): The time in seconds between the last value change and the current time.

### Getting user actions

- [sources](gclinearinput/sources.md): One or more physical actions the user performs to manipulate the input.

### Instance Properties

- [physicalExtents](gclinearinput/physicalextents.md): An object describing the physical extents of the input, if the input represents a physical unit of measurement.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# GCLinearInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of inputs that provide values in unit coordinates.

## Declaration

```objectivec
@protocol GCLinearInput <NSObject>
```

## Topics

### Getting the characteristics

- [canWrap](gclinearinput/canwrap.md): A Boolean value that indicates whether the input value wraps when it reaches the range’s minimum or maximum value.
- [analog](gclinearinput/isanalog.md): A Boolean value that indicates whether the input provides analog values.

### Getting the value

- [value](gclinearinput/value.md): The value in unit coordinates.
- [valueDidChangeHandler](gclinearinput/valuedidchangehandler.md): The block that the profile calls when an element’s value changes.
- [lastValueTimestamp](gclinearinput/lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](gclinearinput/lastvaluelatency.md): The time in seconds between the last value change and the current time.

### Getting user actions

- [sources](gclinearinput/sources.md): One or more physical actions the user performs to manipulate the input.

### Instance Properties

- [physicalExtents](gclinearinput/physicalextents.md): An object describing the physical extents of the input, if the input represents a physical unit of measurement.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Directional pad elements

- [GCInputDirectionPadName](gcinputdirectionpadname.md): The Objective-C type for the name of a directional pad.
