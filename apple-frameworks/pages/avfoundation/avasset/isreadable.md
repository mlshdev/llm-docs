> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/isreadable](https://developer.apple.com/documentation/avfoundation/avasset/isreadable)

# isReadable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 16.0) · iPadOS 4.3+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0)

A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.

> Load the value of [isReadable](../avpartialasyncproperty/isreadable.md) asynchronously instead.

## Declaration

```swift
var isReadable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can use [AVAssetReader](../avassetreader.md) to extract the asset’s media data.

# readable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReadable) BOOL readable;
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can use [AVAssetReader](../avassetreader.md) to extract the asset’s media data.

## See Also

### Accessing suitability

- [playable](isplayable.md): Deprecated. A Boolean value that indicates whether the asset has playable content.
- [exportable](isexportable.md): Deprecated. A Boolean value that indicates whether you can export this asset using an export session.
- [composable](iscomposable.md): Deprecated. A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [compatibleWithAirPlayVideo](iscompatiblewithairplayvideo.md): Deprecated. A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [compatibleWithSavedPhotosAlbum](iscompatiblewithsavedphotosalbum.md): Deprecated. A Boolean value that indicates whether you can write the asset to the Saved Photos album.
