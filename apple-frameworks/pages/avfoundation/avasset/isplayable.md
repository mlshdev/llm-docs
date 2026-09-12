> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/isplayable](https://developer.apple.com/documentation/avfoundation/avasset/isplayable)

# isPlayable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ (deprecated in 16.0) · iPadOS 4.3+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

A Boolean value that indicates whether the asset has playable content.

> Load the value of [isPlayable](../avpartialasyncproperty/isplayable-45h5v.md) asynchronously instead.

## Declaration

```swift
var isPlayable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can use the asset to create an [AVPlayerItem](../avplayeritem.md).

# playable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the asset has playable content.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPlayable) BOOL playable;
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can use the asset to create an [AVPlayerItem](../avplayeritem.md).

## See Also

### Accessing suitability

- [exportable](isexportable.md): Deprecated. A Boolean value that indicates whether you can export this asset using an export session.
- [readable](isreadable.md): Deprecated. A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [composable](iscomposable.md): Deprecated. A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [compatibleWithAirPlayVideo](iscompatiblewithairplayvideo.md): Deprecated. A Boolean value that indicates whether the asset is compatible with AirPlay Video.
- [compatibleWithSavedPhotosAlbum](iscompatiblewithsavedphotosalbum.md): Deprecated. A Boolean value that indicates whether you can write the asset to the Saved Photos album.
