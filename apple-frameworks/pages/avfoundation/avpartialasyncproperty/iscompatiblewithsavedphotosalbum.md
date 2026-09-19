> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/iscompatiblewithsavedphotosalbum

# isCompatibleWithSavedPhotosAlbum

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether you can write the asset to the Saved Photos album.

## Declaration

```swift
static var isCompatibleWithSavedPhotosAlbum: AVAsyncProperty<Root, Bool> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading suitability

- [isPlayable](isplayable-45h5v.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether an asset contains playable content.
- [isExportable](isexportable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can export an asset using an export session.
- [isReadable](isreadable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isComposable](iscomposable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can use the asset in a media composition.
- [isCompatibleWithAirPlayVideo](iscompatiblewithairplayvideo.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset is compatible with AirPlay Video.
