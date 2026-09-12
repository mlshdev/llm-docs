> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxisinput/value](https://developer.apple.com/documentation/gamecontroller/gcaxisinput/value)

# value (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The value along the axis, in unit coordinates.

## Declaration

```swift
var value: Float { get }
```

## See Also

### Getting the value

- [valueDidChangeHandler](valuedidchangehandler.md): The block that the input object calls when the value changes.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.

# value (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The value along the axis, in unit coordinates.

## Declaration

```objectivec
@property (readonly) float value;
```

## See Also

### Getting the value

- [valueDidChangeHandler](valuedidchangehandler.md): The block that the input object calls when the value changes.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.
