> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/iscompatiblewithsavedphotosalbum](https://developer.apple.com/documentation/avfoundation/avasset/iscompatiblewithsavedphotosalbum)

# isCompatibleWithSavedPhotosAlbum (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 16.0) · iPadOS 5.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS 9.0+ (deprecated in 16.0)

A Boolean value that indicates whether you can write the asset to the Saved Photos album.

> Load the value of [isCompatibleWithSavedPhotosAlbum](../avpartialasyncproperty/iscompatiblewithsavedphotosalbum.md) asynchronously instead.

## Declaration

```swift
var isCompatibleWithSavedPhotosAlbum: Bool { get }
```

# compatibleWithSavedPhotosAlbum (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you can write the asset to the Saved Photos album.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCompatibleWithSavedPhotosAlbum) BOOL compatibleWithSavedPhotosAlbum;
```

## See Also

### Accessing suitability

- [playable](isplayable.md): Deprecated. A Boolean value that indicates whether the asset has playable content.
- [exportable](isexportable.md): Deprecated. A Boolean value that indicates whether you can export this asset using an export session.
- [readable](isreadable.md): Deprecated. A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [composable](iscomposable.md): Deprecated. A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [compatibleWithAirPlayVideo](iscompatiblewithairplayvideo.md): Deprecated. A Boolean value that indicates whether the asset is compatible with AirPlay Video.
