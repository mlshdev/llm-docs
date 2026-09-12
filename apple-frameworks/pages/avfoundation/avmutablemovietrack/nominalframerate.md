> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/nominalframerate](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/nominalframerate)

# nominalFrameRate

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

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
