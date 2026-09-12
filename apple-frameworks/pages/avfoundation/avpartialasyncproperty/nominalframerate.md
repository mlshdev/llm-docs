> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/nominalframerate](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/nominalframerate)

# nominalFrameRate

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The frame rate of the track, in frames per second.

## Declaration

```swift
static var nominalFrameRate: AVAsyncProperty<Root, Float> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

The nominal frame rate indicates the number of frames per second for tracks that contain a full frame per media sample. For field-based (interlaced) video tracks, the value of this property indicates the field rate, not the frame rate.

## See Also

### Loading frame-based characteristics

- [minFrameDuration](minframeduration.md): Conforms when `Root` inherits `AVAssetTrack`. The minimum duration of the track’s frames.
- [requiresFrameReordering](requiresframereordering.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.
