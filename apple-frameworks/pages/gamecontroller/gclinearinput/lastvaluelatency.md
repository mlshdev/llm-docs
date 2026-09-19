> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gclinearinput/lastvaluelatency

# lastValueLatency (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

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

- [value](value.md): The value in unit coordinates.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the profile calls when an element’s value changes.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.

# lastValueLatency (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

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

- [value](value.md): The value in unit coordinates.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the profile calls when an element’s value changes.
- [lastValueTimestamp](lastvaluetimestamp.md): The time of the most recent value change.
