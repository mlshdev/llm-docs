> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcswitchpositioninput/lastpositiontimestamp](https://developer.apple.com/documentation/gamecontroller/gcswitchpositioninput/lastpositiontimestamp)

# lastPositionTimestamp (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A timestamp for when the profile reports the last position.

## Declaration

```swift
var lastPositionTimestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between positions, subtract a previous value from the current value.

## See Also

### Getting the position

- [position](position.md): The position of the switch.
- [positionDidChangeHandler](positiondidchangehandler.md): The block that the profile calls when the value of the switch changes.
- [lastPositionLatency](lastpositionlatency.md): The time in seconds between the current and previous positions.

# lastPositionTimestamp (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A timestamp for when the profile reports the last position.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastPositionTimestamp;
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between positions, subtract a previous value from the current value.

## See Also

### Getting the position

- [position](position.md): The position of the switch.
- [positionDidChangeHandler](positiondidchangehandler.md): The block that the profile calls when the value of the switch changes.
- [lastPositionLatency](lastpositionlatency.md): The time in seconds between the current and previous positions.
