> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gclinearinput/lastvaluetimestamp](https://developer.apple.com/documentation/gamecontroller/gclinearinput/lastvaluetimestamp)

# lastValueTimestamp (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time of the most recent value change.

## Declaration

```swift
var lastValueTimestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between value changes, subtract a previous time from the current time.

## See Also

### Getting the value

- [value](value.md): The value in unit coordinates.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the profile calls when an element’s value changes.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.

# lastValueTimestamp (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time of the most recent value change.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastValueTimestamp;
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between value changes, subtract a previous time from the current time.

## See Also

### Getting the value

- [value](value.md): The value in unit coordinates.
- [valueDidChangeHandler](valuedidchangehandler.md): The block that the profile calls when an element’s value changes.
- [lastValueLatency](lastvaluelatency.md): The time in seconds between the last value change and the current time.
