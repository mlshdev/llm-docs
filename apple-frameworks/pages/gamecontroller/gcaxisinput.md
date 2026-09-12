> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxisinput](https://developer.apple.com/documentation/gamecontroller/gcaxisinput)

# GCAxisInput (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of inputs that provide absolute values along an axis with a fixed origin.

## Declaration

```swift
protocol GCAxisInput : NSObjectProtocol
```

## Topics

### Getting the characteristics

- [canWrap](gcaxisinput/canwrap.md): A Boolean value that indicates whether the value wraps when it reaches the range’s minimum or maximum value.
- [isAnalog](gcaxisinput/isanalog.md): A Boolean value that indicates whether the input provides analog values.

### Getting the value

- [value](gcaxisinput/value.md): The value along the axis, in unit coordinates.
- [valueDidChangeHandler](gcaxisinput/valuedidchangehandler.md): The block that the input object calls when the value changes.
- [lastValueTimestamp](gcaxisinput/lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](gcaxisinput/lastvaluelatency.md): The time in seconds between the last value change and the current time.

### Getting user actions

- [sources](gcaxisinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Gear shifter elements

- [GCGearShifterElement](gcgearshifterelement.md): An element that represents either a pattern or a sequential gear shift.
- [GCRelativeInput](gcrelativeinput.md): The common properties of inputs that provide positions along an axis that are relative to the previous position.

# GCAxisInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of inputs that provide absolute values along an axis with a fixed origin.

## Declaration

```objectivec
@protocol GCAxisInput <NSObject>
```

## Topics

### Getting the characteristics

- [canWrap](gcaxisinput/canwrap.md): A Boolean value that indicates whether the value wraps when it reaches the range’s minimum or maximum value.
- [analog](gcaxisinput/isanalog.md): A Boolean value that indicates whether the input provides analog values.

### Getting the value

- [value](gcaxisinput/value.md): The value along the axis, in unit coordinates.
- [valueDidChangeHandler](gcaxisinput/valuedidchangehandler.md): The block that the input object calls when the value changes.
- [lastValueTimestamp](gcaxisinput/lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](gcaxisinput/lastvaluelatency.md): The time in seconds between the last value change and the current time.

### Getting user actions

- [sources](gcaxisinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Gear shifter elements

- [GCInputAxisName](gcinputaxisname.md): The Objective-C type for an input axis name.
- [GCGearShifterElement](gcgearshifterelement.md): An element that represents either a pattern or a sequential gear shift.
- [GCRelativeInput](gcrelativeinput.md): The common properties of inputs that provide positions along an axis that are relative to the previous position.
