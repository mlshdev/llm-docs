> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/isreadable](https://developer.apple.com/documentation/avfoundation/avmutablemovie/isreadable)

# isReadable

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.

## Declaration

```swift
var isReadable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can use [AVAssetReader](../avassetreader.md) to extract the composition’s media data.

## See Also

### Determining suitability

- [isPlayable](isplayable.md): A Boolean value that indicates whether the asset has playable content.
- [isExportable](isexportable.md): A Boolean value that indicates whether you can export this asset using an export session.
- [isComposable](iscomposable.md): A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [isCompatibleWithAirPlayVideo](iscompatiblewithairplayvideo.md): A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [isCompatibleWithSavedPhotosAlbum](iscompatiblewithsavedphotosalbum.md): A Boolean value that indicates whether you can write the composition to the Saved Photos album.
