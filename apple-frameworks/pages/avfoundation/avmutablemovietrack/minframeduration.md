> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/minframeduration](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/minframeduration)

# minFrameDuration

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 1.0+

The minimum duration of the track’s frames.

## Declaration

```swift
var minFrameDuration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

A track’s minimum frame duration is the reciprocal of its maximum frame rate. For example, a video track with a maximum frame rate of 30 frames per second has a minimum frame duration of 1/30, or 0.033 seconds.

The value of this property is [invalid](../../coremedia/cmtime/invalid.md) if the track can’t calculate its minimum frame duration, or if it’s unknown.

## See Also

### Accessing frame-based characteristics

- [nominalFrameRate](nominalframerate.md): The frame rate of the track, in frames per second.
- [requiresFrameReordering](requiresframereordering.md): A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.
