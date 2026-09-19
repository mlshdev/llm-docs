> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/requiresframereordering

# requiresFrameReordering

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.

## Declaration

```swift
static var requiresFrameReordering: AVAsyncProperty<Root, Bool> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading frame-based characteristics

- [nominalFrameRate](nominalframerate.md): Conforms when `Root` inherits `AVAssetTrack`. The frame rate of the track, in frames per second.
- [minFrameDuration](minframeduration.md): Conforms when `Root` inherits `AVAssetTrack`. The minimum duration of the track’s frames.
