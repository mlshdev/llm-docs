> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/iscomposable](https://developer.apple.com/documentation/avfoundation/avcomposition/iscomposable)

# isComposable

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether you can use the asset as a segment of a composition track.

## Declaration

```swift
var isComposable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can use the composition as a segment within an [AVCompositionTrack](../avcompositiontrack.md) object.

## See Also

### Determining suitability

- [isPlayable](isplayable.md): A Boolean value that indicates whether the asset has playable content.
- [isReadable](isreadable.md): A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isExportable](isexportable.md): A Boolean value that indicates whether you can export this asset using an export session.
- [isCompatibleWithAirPlayVideo](iscompatiblewithairplayvideo.md): A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [isCompatibleWithSavedPhotosAlbum](iscompatiblewithsavedphotosalbum.md): A Boolean value that indicates whether you can write the composition to the Saved Photos album.
