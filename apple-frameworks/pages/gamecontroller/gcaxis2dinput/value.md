> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxis2dinput/value](https://developer.apple.com/documentation/gamecontroller/gcaxis2dinput/value)

# value (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The axis input represented as a normalized point in a two-dimensional coordinate system.

## Declaration

```swift
var value: GCPoint2 { get }
```

<a id="Discussion"></a>

## Discussion

The values of the coordinates range between `-1` and `1` where `(0,0)` is the fixed origin. Game Controller deadzones and saturates the values so there’s no value outside this range. A zero coordinate is inside the deadzone and any coordinate greater than or less than zero is outside the deadzone.

## See Also

### Getting the value

- [GCPoint2](../gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.

# value (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The axis input represented as a normalized point in a two-dimensional coordinate system.

## Declaration

```objectivec
@property (readonly) GCPoint2 value;
```

<a id="Discussion"></a>

## Discussion

The values of the coordinates range between `-1` and `1` where `(0,0)` is the fixed origin. Game Controller deadzones and saturates the values so there’s no value outside this range. A zero coordinate is inside the deadzone and any coordinate greater than or less than zero is outside the deadzone.

## See Also

### Getting the value

- [GCPoint2](../gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.
