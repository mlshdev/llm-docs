> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/runloop/mode/default

# default (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The mode set to handle input sources other than connection objects.

## Declaration

```swift
static let `default`: RunLoop.Mode
```

<a id="Discussion"></a>

## Discussion

This is the most commonly used run-loop mode.

## See Also

### System Run Loop Modes

- [common](common.md): A pseudo-mode that includes one or more other run loop modes.
- [eventTracking](eventtracking.md): The mode set when tracking events modally, such as a mouse-dragging loop.
- [modalPanel](modalpanel.md): The mode set when waiting for input from a modal panel, such as a save or open panel.
- [tracking](tracking.md): The mode set while tracking in controls takes place.

# NSDefaultRunLoopMode (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The mode set to handle input sources other than connection objects.

## Declaration

```objectivec
extern NSRunLoopMode const NSDefaultRunLoopMode;
```

<a id="Discussion"></a>

## Discussion

This is the most commonly used run-loop mode.

## See Also

### System Run Loop Modes

- [NSRunLoopCommonModes](common.md): A pseudo-mode that includes one or more other run loop modes.
