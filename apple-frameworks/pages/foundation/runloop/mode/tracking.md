> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/runloop/mode/tracking

# tracking

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+

The mode set while tracking in controls takes place.

## Declaration

```swift
static let tracking: RunLoop.Mode
```

<a id="Discussion"></a>

## Discussion

You can use this mode to add timers that fire during tracking.

## See Also

### System Run Loop Modes

- [common](common.md): A pseudo-mode that includes one or more other run loop modes.
- [default](default.md): The mode set to handle input sources other than connection objects.
- [eventTracking](eventtracking.md): The mode set when tracking events modally, such as a mouse-dragging loop.
- [modalPanel](modalpanel.md): The mode set when waiting for input from a modal panel, such as a save or open panel.
