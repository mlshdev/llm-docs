> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/minframeduration](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/minframeduration)

# minFrameDuration

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The minimum duration of the track’s frames.

## Declaration

```swift
static var minFrameDuration: AVAsyncProperty<Root, CMTime> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

A track’s minimum frame duration is the reciprocal of its maximum frame rate. For example, a video track with a maximum frame rate of 30 frames per second has a minimum frame duration of 1/30, or 0.033 seconds.

The value of this property is [invalid](../../coremedia/cmtime/invalid.md) if the track can’t calculate its minimum frame duration, or if it’s unknown.

## See Also

### Loading frame-based characteristics

- [nominalFrameRate](nominalframerate.md): Conforms when `Root` inherits `AVAssetTrack`. The frame rate of the track, in frames per second.
- [requiresFrameReordering](requiresframereordering.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.
