> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcpressedstateinput/ispressed](https://developer.apple.com/documentation/gamecontroller/gcpressedstateinput/ispressed)

# isPressed (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the user presses the button.

## Declaration

```swift
var isPressed: Bool { get }
```

## See Also

### Getting change information

- [lastPressedStateTimestamp](lastpressedstatetimestamp.md): The time of the most recent press state change.
- [lastPressedStateLatency](lastpressedstatelatency.md): The time in seconds between the last press state change and the current time.
- [pressedDidChangeHandler](presseddidchangehandler.md): The block that the profile calls when an element’s press state changes.

# pressed (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the user presses the button.

## Declaration

```objectivec
@property (readonly, getter=isPressed) BOOL pressed;
```

## See Also

### Getting change information

- [lastPressedStateTimestamp](lastpressedstatetimestamp.md): The time of the most recent press state change.
- [lastPressedStateLatency](lastpressedstatelatency.md): The time in seconds between the last press state change and the current time.
- [pressedDidChangeHandler](presseddidchangehandler.md): The block that the profile calls when an element’s press state changes.
