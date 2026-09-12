> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcpressedstateinput/presseddidchangehandler](https://developer.apple.com/documentation/gamecontroller/gcpressedstateinput/presseddidchangehandler)

# pressedDidChangeHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when an element’s press state changes.

## Declaration

```swift
var pressedDidChangeHandler: ((any GCPhysicalInputElement, any GCPressedStateInput, Bool) -> Void)? { get set }
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element whose value changed.
- **`input`**: The press state of the element.

## See Also

### Getting change information

- [isPressed](ispressed.md): A Boolean value that indicates whether the user presses the button.
- [lastPressedStateTimestamp](lastpressedstatetimestamp.md): The time of the most recent press state change.
- [lastPressedStateLatency](lastpressedstatelatency.md): The time in seconds between the last press state change and the current time.

# pressedDidChangeHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when an element’s press state changes.

## Declaration

```objectivec
@property (atomic, copy, nullable) void (^pressedDidChangeHandler)(id<GCPhysicalInputElement>element, id<GCPressedStateInput>input, BOOL pressed);
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

The block’s parameters are:

- **`element`**: The element whose value changed.
- **`input`**: The press state of the element.

## See Also

### Getting change information

- [pressed](ispressed.md): A Boolean value that indicates whether the user presses the button.
- [lastPressedStateTimestamp](lastpressedstatetimestamp.md): The time of the most recent press state change.
- [lastPressedStateLatency](lastpressedstatelatency.md): The time in seconds between the last press state change and the current time.
