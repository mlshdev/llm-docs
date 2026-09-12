> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/iscompatiblewithairplayvideo](https://developer.apple.com/documentation/avfoundation/avasset/iscompatiblewithairplayvideo)

# isCompatibleWithAirPlayVideo (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 16.0) · iPadOS 9.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0)

A Boolean value that indicates whether the asset is compatible with AirPlay Video.

> Load the value of [isCompatibleWithAirPlayVideo](../avpartialasyncproperty/iscompatiblewithairplayvideo.md) asynchronously instead.

## Declaration

```swift
var isCompatibleWithAirPlayVideo: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can play this asset’s content to an external AirPlay device, like an Apple TV.

# compatibleWithAirPlayVideo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the asset is compatible with AirPlay Video.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCompatibleWithAirPlayVideo) BOOL compatibleWithAirPlayVideo;
```

<a id="Discussion"></a>

## Discussion

This property value is [true](https://developer.apple.com/documentation/swift/true) if you can play this asset’s content to an external AirPlay device, like an Apple TV.

## See Also

### Accessing suitability

- [playable](isplayable.md): Deprecated. A Boolean value that indicates whether the asset has playable content.
- [exportable](isexportable.md): Deprecated. A Boolean value that indicates whether you can export this asset using an export session.
- [readable](isreadable.md): Deprecated. A Boolean value that indicates whether you can extract the asset’s media data using an asset reader.
- [composable](iscomposable.md): Deprecated. A Boolean value that indicates whether you can use the asset as a segment of a composition track.
- [compatibleWithSavedPhotosAlbum](iscompatiblewithsavedphotosalbum.md): Deprecated. A Boolean value that indicates whether you can write the asset to the Saved Photos album.
