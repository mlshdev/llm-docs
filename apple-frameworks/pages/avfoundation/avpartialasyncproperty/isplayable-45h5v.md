> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/isplayable-45h5v](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/isplayable-45h5v)

# isPlayable

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether an asset contains playable content.

## Declaration

```swift
static var isPlayable: AVAsyncProperty<Root, Bool> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

> **Note**

>  You can attempt playback when value is [false](https://developer.apple.com/documentation/swift/false), but this may result in a substandard playback experience.

## See Also

### Loading suitability

- [isExportable](isexportable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can export an asset using an export session.
- [isReadable](isreadable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [isComposable](iscomposable.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can use the asset in a media composition.
- [isCompatibleWithAirPlayVideo](iscompatiblewithairplayvideo.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [isCompatibleWithSavedPhotosAlbum](iscompatiblewithsavedphotosalbum.md): Conforms when `Root` inherits `AVAsset`. A Boolean value that indicates whether you can write the asset to the Saved Photos album.
