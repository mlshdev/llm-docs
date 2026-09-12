> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcpressedstateinput/lastpressedstatelatency](https://developer.apple.com/documentation/gamecontroller/gcpressedstateinput/lastpressedstatelatency)

# lastPressedStateLatency (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the last press state change and the current time.

## Declaration

```swift
var lastPressedStateLatency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting change information

- [isPressed](ispressed.md): A Boolean value that indicates whether the user presses the button.
- [lastPressedStateTimestamp](lastpressedstatetimestamp.md): The time of the most recent press state change.
- [pressedDidChangeHandler](presseddidchangehandler.md): The block that the profile calls when an element’s press state changes.

# lastPressedStateLatency (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the last press state change and the current time.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastPressedStateLatency;
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting change information

- [pressed](ispressed.md): A Boolean value that indicates whether the user presses the button.
- [lastPressedStateTimestamp](lastpressedstatetimestamp.md): The time of the most recent press state change.
- [pressedDidChangeHandler](presseddidchangehandler.md): The block that the profile calls when an element’s press state changes.
