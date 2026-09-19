> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgdisplaystreamframestatus/frameidle

# CGDisplayStreamFrameStatus.frameIdle (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

A new frame was not generated because the display did not change.

## Declaration

```swift
case frameIdle
```

## See Also

### Constants

- [CGDisplayStreamFrameStatus.frameComplete](framecomplete.md): A new frame was generated.
- [CGDisplayStreamFrameStatus.frameBlank](frameblank.md): A new frame was not generated because the display has gone blank.
- [CGDisplayStreamFrameStatus.stopped](stopped.md): The display stream was stopped.

# kCGDisplayStreamFrameStatusFrameIdle (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

A new frame was not generated because the display did not change.

## Declaration

```objectivec
kCGDisplayStreamFrameStatusFrameIdle
```

## See Also

### Constants

- [kCGDisplayStreamFrameStatusFrameComplete](framecomplete.md): A new frame was generated.
- [kCGDisplayStreamFrameStatusFrameBlank](frameblank.md): A new frame was not generated because the display has gone blank.
- [kCGDisplayStreamFrameStatusStopped](stopped.md): The display stream was stopped.
