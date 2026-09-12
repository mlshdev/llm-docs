> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcpressedstateinput/lastpressedstatetimestamp](https://developer.apple.com/documentation/gamecontroller/gcpressedstateinput/lastpressedstatetimestamp)

# lastPressedStateTimestamp (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time of the most recent press state change.

## Declaration

```swift
var lastPressedStateTimestamp: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between changes, subtract a previous value from the current value.

## See Also

### Getting change information

- [isPressed](ispressed.md): A Boolean value that indicates whether the user presses the button.
- [lastPressedStateLatency](lastpressedstatelatency.md): The time in seconds between the last press state change and the current time.
- [pressedDidChangeHandler](presseddidchangehandler.md): The block that the profile calls when an element’s press state changes.

# lastPressedStateTimestamp (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time of the most recent press state change.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastPressedStateTimestamp;
```

<a id="Discussion"></a>

## Discussion

This property isn’t a specific date and time. To determine the time between changes, subtract a previous value from the current value.

## See Also

### Getting change information

- [pressed](ispressed.md): A Boolean value that indicates whether the user presses the button.
- [lastPressedStateLatency](lastpressedstatelatency.md): The time in seconds between the last press state change and the current time.
- [pressedDidChangeHandler](presseddidchangehandler.md): The block that the profile calls when an element’s press state changes.
