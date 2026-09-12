> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/hasaudiosampledependencies](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/hasaudiosampledependencies)

# hasAudioSampleDependencies

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the track has sample dependencies.

## Declaration

```swift
static var hasAudioSampleDependencies: AVAsyncProperty<Root, Bool> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

The value is always [false](https://developer.apple.com/documentation/swift/false) for nonaudible media.

## See Also

### Loading audible characteristics

- [preferredVolume](preferredvolume-8q2yt.md): Conforms when `Root` inherits `AVAssetTrack`. The track’s volume preference for playing its audible media.
