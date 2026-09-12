> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/isexportable](https://developer.apple.com/documentation/avfoundation/avcomposition/isexportable)

# isExportable

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you can export this asset using an export session.

## Declaration

```swift
var isExportable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can export the composition using [AVAssetExportSession](../avassetexportsession.md).

## See Also

### Determining suitability

- [isPlayable](isplayable.md): A Boolean value that indicates whether the asset has playable content.
- [isReadable](isreadable.md): A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isComposable](iscomposable.md): A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [isCompatibleWithAirPlayVideo](iscompatiblewithairplayvideo.md): A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [isCompatibleWithSavedPhotosAlbum](iscompatiblewithsavedphotosalbum.md): A Boolean value that indicates whether you can write the composition to the Saved Photos album.
