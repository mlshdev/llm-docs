> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxis2dinput/lastvaluelatency](https://developer.apple.com/documentation/gamecontroller/gcaxis2dinput/lastvaluelatency)

# lastValueLatency (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The time in seconds between the last value change and the current time.

## Declaration

```swift
var lastValueLatency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting the value

- [value](value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [GCPoint2](../gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.

# lastValueLatency (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The time in seconds between the last value change and the current time.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastValueLatency;
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting the value

- [value](value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [GCPoint2](../gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
