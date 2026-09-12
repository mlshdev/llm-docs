> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/requiresframereordering](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/requiresframereordering)

# requiresFrameReordering

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.

## Declaration

```swift
var requiresFrameReordering: Bool { get }
```

## See Also

### Accessing frame-based characteristics

- [nominalFrameRate](nominalframerate.md): The frame rate of the track, in frames per second.
- [minFrameDuration](minframeduration.md): The minimum duration of the track’s frames.
