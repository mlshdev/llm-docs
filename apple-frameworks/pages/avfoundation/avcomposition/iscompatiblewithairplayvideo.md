> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/iscompatiblewithairplayvideo](https://developer.apple.com/documentation/avfoundation/avcomposition/iscompatiblewithairplayvideo)

# isCompatibleWithAirPlayVideo

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset is compatible with AirPlay Video.

## Declaration

```swift
var isCompatibleWithAirPlayVideo: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can play this composition’s content to an external AirPlay device, like an Apple TV.

## See Also

### Determining suitability

- [isPlayable](isplayable.md): A Boolean value that indicates whether the asset has playable content.
- [isReadable](isreadable.md): A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isExportable](isexportable.md): A Boolean value that indicates whether you can export this asset using an export session.
- [isComposable](iscomposable.md): A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [isCompatibleWithSavedPhotosAlbum](iscompatiblewithsavedphotosalbum.md): A Boolean value that indicates whether you can write the composition to the Saved Photos album.
