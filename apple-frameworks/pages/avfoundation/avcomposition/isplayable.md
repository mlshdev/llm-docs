> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/isplayable](https://developer.apple.com/documentation/avfoundation/avcomposition/isplayable)

# isPlayable

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the asset has playable content.

## Declaration

```swift
var isPlayable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can use the composition to create an [AVPlayerItem](../avplayeritem.md).

## See Also

### Determining suitability

- [isReadable](isreadable.md): A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isExportable](isexportable.md): A Boolean value that indicates whether you can export this asset using an export session.
- [isComposable](iscomposable.md): A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [isCompatibleWithAirPlayVideo](iscompatiblewithairplayvideo.md): A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [isCompatibleWithSavedPhotosAlbum](iscompatiblewithsavedphotosalbum.md): A Boolean value that indicates whether you can write the composition to the Saved Photos album.
