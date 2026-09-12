> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginput/uniformtypeidentifier](https://developer.apple.com/documentation/photos/phcontenteditinginput/uniformtypeidentifier)

# uniformTypeIdentifier (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The uniform type identifier for the asset’s image or video data.

> Use contentType instead

## Declaration

```swift
var uniformTypeIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

## See Also

### Getting Information About the Asset

- [mediaType](mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](../phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets such as a panoramic photo or a high-frame-rate video.
- [PHAssetMediaSubtype](../phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [creationDate](creationdate.md): The date and time when the asset was originally created.
- [location](location.md): The location information that was saved with the asset.

# uniformTypeIdentifier (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The uniform type identifier for the asset’s image or video data.

> Use contentType instead

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * uniformTypeIdentifier;
```

<a id="Discussion"></a>

## Discussion

For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

## See Also

### Getting Information About the Asset

- [mediaType](mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](../phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets such as a panoramic photo or a high-frame-rate video.
- [PHAssetMediaSubtype](../phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [creationDate](creationdate.md): The date and time when the asset was originally created.
- [location](location.md): The location information that was saved with the asset.
