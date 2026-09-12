> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginput/location](https://developer.apple.com/documentation/photos/phcontenteditinginput/location)

# location (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The location information that was saved with the asset.

## Declaration

```swift
@NSCopying var location: CLLocation? { get }
```

<a id="Discussion"></a>

## Discussion

Typically, an asset’s location metadata identifies the place where the asset was captured.

## See Also

### Getting Information About the Asset

- [mediaType](mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](../phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets such as a panoramic photo or a high-frame-rate video.
- [PHAssetMediaSubtype](../phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [creationDate](creationdate.md): The date and time when the asset was originally created.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset’s image or video data.

# location (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The location information that was saved with the asset.

## Declaration

```objectivec
@property (copy, readonly, nullable) CLLocation * location;
```

<a id="Discussion"></a>

## Discussion

Typically, an asset’s location metadata identifies the place where the asset was captured.

## See Also

### Getting Information About the Asset

- [mediaType](mediatype.md): The type of the asset, such as video or audio.
- [PHAssetMediaType](../phassetmediatype.md): Identifies the general type of an asset, such as image or video.
- [mediaSubtypes](mediasubtypes.md): The subtypes of the asset, identifying special kinds of assets such as a panoramic photo or a high-frame-rate video.
- [PHAssetMediaSubtype](../phassetmediasubtype.md): Constants identifying specific variations of asset media, such as panorama or screenshot photos, and time-lapse or high-frame-rate video.
- [creationDate](creationdate.md): The date and time when the asset was originally created.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset’s image or video data.
