> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcrelativeinput](https://developer.apple.com/documentation/gamecontroller/gcrelativeinput)

# GCRelativeInput (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of inputs that provide positions along an axis that are relative to the previous position.

## Declaration

```swift
protocol GCRelativeInput : NSObjectProtocol
```

## Topics

### Getting the characteristics

- [isAnalog](gcrelativeinput/isanalog.md): A Boolean value that indicates whether the input provides analog values.

### Getting the delta value and timestamp

- [delta](gcrelativeinput/delta.md): The most recent amount of change in values that the profile records.
- [deltaDidChangeHandler](gcrelativeinput/deltadidchangehandler.md): The block that the profile calls when the element’s input changes.
- [lastDeltaTimestamp](gcrelativeinput/lastdeltatimestamp.md): A timestamp for when the profile reports the delta value.
- [lastDeltaLatency](gcrelativeinput/lastdeltalatency.md): The time in seconds between the current and the previous delta values.

### Getting user actions

- [sources](gcrelativeinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Gear shifter elements

- [GCAxisInput](gcaxisinput.md): The common properties of inputs that provide absolute values along an axis with a fixed origin.
- [GCGearShifterElement](gcgearshifterelement.md): An element that represents either a pattern or a sequential gear shift.

# GCRelativeInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties of inputs that provide positions along an axis that are relative to the previous position.

## Declaration

```objectivec
@protocol GCRelativeInput <NSObject>
```

## Topics

### Getting the characteristics

- [analog](gcrelativeinput/isanalog.md): A Boolean value that indicates whether the input provides analog values.

### Getting the delta value and timestamp

- [delta](gcrelativeinput/delta.md): The most recent amount of change in values that the profile records.
- [deltaDidChangeHandler](gcrelativeinput/deltadidchangehandler.md): The block that the profile calls when the element’s input changes.
- [lastDeltaTimestamp](gcrelativeinput/lastdeltatimestamp.md): A timestamp for when the profile reports the delta value.
- [lastDeltaLatency](gcrelativeinput/lastdeltalatency.md): The time in seconds between the current and the previous delta values.

### Getting user actions

- [sources](gcrelativeinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Gear shifter elements

- [GCAxisInput](gcaxisinput.md): The common properties of inputs that provide absolute values along an axis with a fixed origin.
- [GCInputAxisName](gcinputaxisname.md): The Objective-C type for an input axis name.
- [GCGearShifterElement](gcgearshifterelement.md): An element that represents either a pattern or a sequential gear shift.
