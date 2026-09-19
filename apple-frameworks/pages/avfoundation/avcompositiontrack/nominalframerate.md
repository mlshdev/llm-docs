> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcompositiontrack/nominalframerate

# nominalFrameRate

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The frame rate of the track, in frames per second.

## Declaration

```swift
var nominalFrameRate: Float { get }
```

<a id="Discussion"></a>

## Discussion

The nominal frame rate indicates the number of frames per second for tracks that contain a full frame per media sample. For field-based (interlaced) video tracks, the value of this property indicates the field rate, not the frame rate.

## See Also

### Accessing frame-based characteristics

- [minFrameDuration](minframeduration.md): The minimum duration of the track’s frames.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.
