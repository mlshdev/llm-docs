> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcrelativeinput/lastdeltatimestamp](https://developer.apple.com/documentation/gamecontroller/gcrelativeinput/lastdeltatimestamp)

# lastDeltaTimestamp (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A timestamp for when the profile reports the delta value.

## Declaration

```swift
var lastDeltaTimestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between delta values, subtract a previous value from the current value.

## See Also

### Getting the delta value and timestamp

- [delta](delta.md): The most recent amount of change in values that the profile records.
- [deltaDidChangeHandler](deltadidchangehandler.md): The block that the profile calls when the element’s input changes.
- [lastDeltaLatency](lastdeltalatency.md): The time in seconds between the current and the previous delta values.

# lastDeltaTimestamp (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A timestamp for when the profile reports the delta value.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastDeltaTimestamp;
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between delta values, subtract a previous value from the current value.

## See Also

### Getting the delta value and timestamp

- [delta](delta.md): The most recent amount of change in values that the profile records.
- [deltaDidChangeHandler](deltadidchangehandler.md): The block that the profile calls when the element’s input changes.
- [lastDeltaLatency](lastdeltalatency.md): The time in seconds between the current and the previous delta values.
