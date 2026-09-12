> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/preferredvolume-8q2yt](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/preferredvolume-8q2yt)

# preferredVolume

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The track’s volume preference for playing its audible media.

## Declaration

```swift
static var preferredVolume: AVAsyncProperty<Root, Float> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

The preferred volume for an audio track is typically, but not always, `1.0`. For nonaudible tracks, the value is `0.0`.

## See Also

### Loading audible characteristics

- [hasAudioSampleDependencies](hasaudiosampledependencies.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track has sample dependencies.
