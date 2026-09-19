> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/runloop/mode/eventtracking

# eventTracking

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The mode set when tracking events modally, such as a mouse-dragging loop.

## Declaration

```swift
static let eventTracking: RunLoop.Mode
```

## See Also

### System Run Loop Modes

- [common](common.md): A pseudo-mode that includes one or more other run loop modes.
- [default](default.md): The mode set to handle input sources other than connection objects.
- [modalPanel](modalpanel.md): The mode set when waiting for input from a modal panel, such as a save or open panel.
- [tracking](tracking.md): The mode set while tracking in controls takes place.
