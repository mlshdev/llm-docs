> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcswitchpositioninput/position](https://developer.apple.com/documentation/gamecontroller/gcswitchpositioninput/position)

# position (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The position of the switch.

## Declaration

```swift
var position: Int { get }
```

## See Also

### Getting the position

- [positionDidChangeHandler](positiondidchangehandler.md): The block that the profile calls when the value of the switch changes.
- [lastPositionTimestamp](lastpositiontimestamp.md): A timestamp for when the profile reports the last position.
- [lastPositionLatency](lastpositionlatency.md): The time in seconds between the current and previous positions.

# position (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The position of the switch.

## Declaration

```objectivec
@property (readonly) NSInteger position;
```

## See Also

### Getting the position

- [positionDidChangeHandler](positiondidchangehandler.md): The block that the profile calls when the value of the switch changes.
- [lastPositionTimestamp](lastpositiontimestamp.md): A timestamp for when the profile reports the last position.
- [lastPositionLatency](lastpositionlatency.md): The time in seconds between the current and previous positions.
