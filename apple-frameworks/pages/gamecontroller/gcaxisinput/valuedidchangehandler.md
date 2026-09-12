> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxisinput/valuedidchangehandler](https://developer.apple.com/documentation/gamecontroller/gcaxisinput/valuedidchangehandler)

# valueDidChangeHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the input object calls when the value changes.

## Declaration

```swift
var valueDidChangeHandler: ((any GCPhysicalInputElement, any GCAxisInput, Float) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element whose value changed.
- **`input`**: The input object that changed.
- **`value`**: The value of the axis at the time the input object calls this handler.

## See Also

### Getting the value

- [value](value.md): The value along the axis, in unit coordinates.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.

# valueDidChangeHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the input object calls when the value changes.

## Declaration

```objectivec
@property (atomic, copy, nullable) void (^valueDidChangeHandler)(id<GCPhysicalInputElement>element, id<GCAxisInput>input, float value);
```

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element whose value changed.
- **`input`**: The input object that changed.
- **`value`**: The value of the axis at the time the input object calls this handler.

## See Also

### Getting the value

- [value](value.md): The value along the axis, in unit coordinates.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.
