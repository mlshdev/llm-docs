> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxis2dinput/valuedidchangehandler](https://developer.apple.com/documentation/gamecontroller/gcaxis2dinput/valuedidchangehandler)

# valueDidChangeHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The block that the axis element calls when its value changes.

## Declaration

```swift
var valueDidChangeHandler: ((any GCPhysicalInputElement, any GCAxis2DInput, GCPoint2) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element with the value that changes.
- **`input`**: The input on the element that changes.
- **`value`**: The value of the input when the element invokes this handler.

## See Also

### Getting the value

- [value](value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [GCPoint2](../gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.

# valueDidChangeHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The block that the axis element calls when its value changes.

## Declaration

```objectivec
@property (atomic, copy, nullable) void (^valueDidChangeHandler)(id<GCPhysicalInputElement>element, id<GCAxis2DInput>input, GCPoint2 value);
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element with the value that changes.
- **`input`**: The input on the element that changes.
- **`value`**: The value of the input when the element invokes this handler.

## See Also

### Getting the value

- [value](value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [GCPoint2](../gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.
