> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/isplayable-6txa5](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/isplayable-6txa5)

# isPlayable

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the track is playable in the current environment.

## Declaration

```swift
static var isPlayable: AVAsyncProperty<Root, Bool> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading track information

- [formatDescriptions](formatdescriptions.md): Conforms when `Root` inherits `AVAssetTrack`. The format descriptions of the media samples that a track references.
- [isDecodable](isdecodable.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track is decodable in the current environment.
- [isEnabled](isenabled.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track is in an enabled state.
- [isSelfContained](isselfcontained.md): Conforms when `Root` inherits `AVAssetTrack`. A Boolean value that indicates whether the track references sample data only within its container file.
- [totalSampleDataLength](totalsampledatalength.md): Conforms when `Root` inherits `AVAssetTrack`. The total number of bytes of sample data the track requires.
- [mediaCharacteristics](mediacharacteristics.md): Conforms when `Root` inherits `AVAssetTrack`. The media characteristics for the track.
