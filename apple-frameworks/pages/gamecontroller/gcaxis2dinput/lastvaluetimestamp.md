> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxis2dinput/lastvaluetimestamp](https://developer.apple.com/documentation/gamecontroller/gcaxis2dinput/lastvaluetimestamp)

# lastValueTimestamp (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The time of the most recent value change.

## Declaration

```swift
var lastValueTimestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between value changes in seconds, subtract a previous time from the current time.

## See Also

### Getting the value

- [value](value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [GCPoint2](../gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.

# lastValueTimestamp (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The time of the most recent value change.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastValueTimestamp;
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between value changes in seconds, subtract a previous time from the current time.

## See Also

### Getting the value

- [value](value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [GCPoint2](../gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.
