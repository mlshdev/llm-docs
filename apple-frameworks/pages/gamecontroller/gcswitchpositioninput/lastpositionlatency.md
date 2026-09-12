> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcswitchpositioninput/lastpositionlatency](https://developer.apple.com/documentation/gamecontroller/gcswitchpositioninput/lastpositionlatency)

# lastPositionLatency (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the current and previous positions.

## Declaration

```swift
var lastPositionLatency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting the position

- [position](position.md): The position of the switch.
- [positionDidChangeHandler](positiondidchangehandler.md): The block that the profile calls when the value of the switch changes.
- [lastPositionTimestamp](lastpositiontimestamp.md): A timestamp for when the profile reports the last position.

# lastPositionLatency (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the current and previous positions.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastPositionLatency;
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting the position

- [position](position.md): The position of the switch.
- [positionDidChangeHandler](positiondidchangehandler.md): The block that the profile calls when the value of the switch changes.
- [lastPositionTimestamp](lastpositiontimestamp.md): A timestamp for when the profile reports the last position.
